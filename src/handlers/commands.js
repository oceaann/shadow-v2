const client = require("../index")
const prefixModel = require("../database/models/prefix")
const { readdir } = require("fs")

const { developers, debugChannel, defaultPrefix } = require("../config/config")

client.prefix = {}
client.commands = {}

readdir('./src/commands', (err, files) => {

    files.forEach(file => {

        if(!file.endsWith(".js")) {

            readdir(`./src/commands/${file}`, (err, files) => {

                files.forEach(fileCmd => {
                    
                    const module = require(`../commands/${file}/${fileCmd}`)
                    const command = new module()
                    if(!command.args) return
                    command.args.forEach(cmd => {
                        client.commands[cmd] = command
                    })

                })

            })

        } else {
            
            const module = require(`../commands/${file}`)
            const command = new module()
            if(!command.args) return
            command.args.forEach(cmd => {
                client.commands[cmd] = command
            })

        }

        
    })
})

client.on("messageCreate", async (msg) => {

    if(msg.channel.type !== 0) return

    if(msg.author.bot) return

    if(!client.prefix[msg.guildID]) {

        try {
            
            const { prefix } = (await prefixModel.findOne({ guild: msg.guildID })) || { prefix: defaultPrefix }

            client.prefix[msg.guildID] = prefix

        } catch (e) {
            return console.log(e)
        }

    }

    const prefix = client.prefix[msg.guildID]

    if(!msg.content.toLowerCase().startsWith(prefix)) return

    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = client.commands[command]

    if(!cmd) return

    if(cmd.developerOnly && (!developers.includes(msg.author.id))) return
    if(cmd.moderatorOnly && (!client.staff.includes(msg.author.id))) return console.log(client.staff)

    if(cmd.permissions) {
        for(const permission of cmd.permissions) {
            if(!msg.member.permissions.has(permission.toLowerCase())) return
        }
    }
    

    try {
        const res = await cmd.run(msg, args)
        if(!res) return
        msg.channel.createMessage(res)
    } catch (e) {
        
        if(client.debug) {
            client.createMessage(debugChannel, { embed: { description: `\`\`\`${e}\`\`\`` } })
        }

        msg.channel.createMessage({ embed: { description: "Wystąpił błąd podczas wykonywania komendy" } })

    }

})