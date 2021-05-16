const { Server, OPEN } = require('ws')
const { websocketServerPort, wsAuthorizationToken } = require("./config/config")
const client = require("./index")

const wss = new Server({
  port: websocketServerPort
})

wss.on("connection", (ws) => {
    ws.on("message", (msg) => {

        let data;

        try {

            data = JSON.parse(msg)

            if(!data) return

        } catch(e) {

            return

        }

        if(!data.type) return

        switch(data.type) {

            case "Authorization": 
                
                if(!data.token) return
                if(data.token !== wsAuthorizationToken) return

                client.wsClients.push(ws)

                ws.on("close", () => client.wsClients = client.wsClients.filter(w => w.readyState === OPEN))

        } 
            

    })
})

module.exports = wss