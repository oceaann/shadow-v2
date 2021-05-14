const { TOKEN } = require("./config/config")
const client = new require("eris")(TOKEN)
client.connect()
module.exports = client

client.debug = false

require("./handlers/modules")
require("./handlers/commands")
require("./database/connection")