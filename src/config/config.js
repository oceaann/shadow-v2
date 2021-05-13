const { config } = require("dotenv")
config()
module.exports = {

    inviteContent: "Jestem idiotą i staram się wysłac zaproszenie :)",

    TOKEN: process.env.TOKEN, // DISCORD-BOT-TOKEN
    URL: process.env.URL // MONGODB-URL

}