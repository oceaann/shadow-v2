const fetch = require("node-fetch")
const client = require("../index")

module.exports = (msg, guild) => {

    for (const [g, webhook] of Object.entries(client.webhooks)) {
        
        if(g === guild) continue

        try {

            fetch(webhook, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(msg)
            })

        } catch (e) {

            console.log(e)

        }

    }

}