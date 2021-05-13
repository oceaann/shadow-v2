const { TOKEN } = require("./config/config")
const client = new require("eris")(TOKEN)
client.connect()
module.exports = client

require("./handlers/modules")