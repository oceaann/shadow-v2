const { TOKEN, senderMode } = require("./config/config")
const client = new require("eris")(TOKEN)
client.connect()
module.exports = client

client.debug = false
client.gchannels = []
client.ids = {}
client.mutes = []
client.webhooks = {}
client.wsClients = []

require("./handlers/modules")
require("./handlers/commands")
require("./database/connection")

if(senderMode === 1) {
    client.sender = require("./senders/single")
} else if(senderMode === 2) {
    client.sender = require("./senders/fetch")
} else if(senderMode === 3) {
    require("./server")
    client.sender = require("./senders/ws")
}