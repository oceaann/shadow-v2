const { TOKEN, senderMode } = require("./config/config")
const client = new require("eris")(TOKEN)
client.connect()
module.exports = client

client.debug = false
client.gchannels = []
client.ids = {}
client.mutes = []
client.webhooks = {}

require("./handlers/modules")
require("./handlers/commands")
require("./database/connection")

if(senderMode === 1) {
    client.sender = require("./senders/single")
}