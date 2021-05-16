const client = require("../../index")

module.exports = class cmd {

    constructor() {
        this.args = ["vm", "vr", "visiblerank", "visiblemoderator", "visible-rank", "visible-moderator"]
        this.moderatorOnly = true
    }

    async run(msg, args) {
        
        if(!client.visibleMods.includes(msg.author.id)) {
            client.visibleMods.push(msg.author.id)
        } else {
            client.visibleMods = client.visibleMods.filter(u => u !== msg.author.id)
        }
        
        return "Ustawiono"

    }

}