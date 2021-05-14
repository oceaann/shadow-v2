const { config } = require("dotenv")
config()
module.exports = {

    inviteContent: "Jestem idiotą i staram się wysłac zaproszenie :)",
    allowedBots: ["719434143460753488", "752514883316219914", "810280511192432642", "793933879576756225"],
    developers: ["494386855974928386"],
    debugChannel: "778351902919753790",
    prefixLengthLimit: 20,
    defaultPrefix: "-",

    senderMode: 2, // 1- single, 2 - fetch, 3 - websocket
    sendersServers: [], // only for sender mode 2 
    fetchAuthorization: "", // only for sender mode 2 


    TOKEN: process.env.TOKEN, // DISCORD-BOT-TOKEN
    URL: process.env.URL // MONGODB-URL

}