const { prefixLengthLimit } = require("../config/config")
const prefixModel = require("../database/models/prefix")
const client = require("../index")

module.exports = class cmd {

    constructor() {
        this.args = ["prefix"]
        this.permissions = ["ADMINISTRATOR"]
    }

    async run(msg, args) {
        
        if(!args[0]) return "Musisz podać prefix"
        if(args[0].length > prefixLengthLimit) return "Za długi prefix"
    
        const prefix_update = await prefixModel.updateOne({ guild: msg.guildID }, { prefix: args[0] })
    
        if(prefix_update.n < 1) {
    
            await prefixModel.insertMany([{ guild: msg.guildID, prefix: args[0] }])
    
        }

        client.prefix[msg.guildID] = args[0]

        return "Zmieniono prefix"

    }

}