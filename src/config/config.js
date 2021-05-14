const { config } = require("dotenv")
config()
module.exports = {

    inviteContent: "Jestem idiotą i staram się wysłac zaproszenie :)",
    developers: ["494386855974928386"],
    debugChannel: "778351902919753790",
    prefixLengthLimit: 20,
    defaultPrefix: "-",

    TOKEN: process.env.TOKEN, // DISCORD-BOT-TOKEN
    URL: process.env.URL // MONGODB-URL

}