const client = require("../index")

client.on("ready", () => {
    client.editStatus({ type: 1, name: "-help", url: "https://twitch.tv/help" })
})