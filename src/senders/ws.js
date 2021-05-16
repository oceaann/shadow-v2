const wss = require("../server")
const client = require("../index")

module.exports = (msg, guild) => {

    const webhooks = Object.entries(client.webhooks).filter(w => guild != w[0])

    const lost = webhooks.length % client.wsClients.length

    let i = 0

    client.wsClients.forEach((ws) => {

        const wh = webhooks.slice(((webhooks.length - lost) / client.wsClients.length) * i, ((webhooks.length - lost) / client.wsClients.length) * ( i + 1 ))

        if(i === 0){

            webhooks.slice(webhooks.length - lost, webhooks.length).forEach(w => {
                wh.push(w)
            })

        }

        try {
            ws.send(JSON.stringify({ webhooks: wh.map(w => w[1]), body: msg, type: "send" }))
        } catch(e) {
            console.log(e)
        }
    
        i++

    });

}