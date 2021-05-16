const fetch = require("node-fetch")
const client = require("../index")
const { sendersServers, fetchAuthorization } = require("../config/config")

module.exports = (msg, guild) => {

    const webhooks = Object.entries(client.webhooks).filter(w => guild != w[0])

    const lost = webhooks.length % sendersServers.length

    let i = 0

    sendersServers.forEach(s => {

        const wh = webhooks.slice(((webhooks.length - lost) / sendersServers.length) * i, ((webhooks.length - lost) / sendersServers.length) * ( i + 1 ))

        if(i === 0){

            webhooks.slice(webhooks.length - lost, webhooks.length).forEach(w => {
                wh.push(w)
            })

        }

        try {

            fetch(s, {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": fetchAuthorization
                },
                "body": JSON.stringify({
                    "webhooks": wh.map(w => w[1]),
                    "body": msg
                })
            })

        } catch(e) {
            console.log(e)
        }
        
        i++ 

    })

}