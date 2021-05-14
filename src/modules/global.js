const client = require("../index")
const idStructure = require("../structures/shortID")
const msgStructure = require("../structures/message")
const { allowedBots } = require("../config/config")

client.on("messageCreate", async (msg) => {

    if(!client.gchannels.includes(msg.channel.id)) return

    if(msg.author.webhookID) return

    if(msg.author.bot && (!allowedBots.includes(msg.author.id))) return

    if(client.mutes.includes(msg.author.id)) return

    const id = new idStructure(msg.author.id)
    await id.get()

    const message = new msgStructure(msg, id.toNicknameString())

    client.sender(message, msg.guildID)

})