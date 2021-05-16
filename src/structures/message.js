const inviteRegEx = new RegExp(/(https?:\/\/)?(www.)?(discord.(gg|io|me)|(discordapp|discord).com\/invite)\/[^\s\\/]+?(?=\b)/gmi)
const { inviteContent } = require("../config/config")

module.exports = class {

    constructor(data, id) {

        this.content = data.content || null
        
        if(this.content && inviteRegEx.test(this.content)) {
            this.content = inviteContent
        } else if(data.activity) {
            if(data.activity.party_id.startsWith("spotify:")) this.content = `[Spotify invite: ${msg.activity.party_id}]`
            else this.content = "[Game invite]"
        }

        this.attachments = (data.attachments || []).map(a => a.url)

        if(data.stickers) {
            this.content = `${this.content || ""}\n[Sticker]`
        }

        if(data.embeds && data.embeds[0]) {
            if(data.author.bot) {
                this.embeds = data.embeds
            } else {
                this.content = "[Embed]"
            }
        } else if(data.interaction) {
            this.content = "[Interaction]"
        }

        this.username = `${data.author.username}#${data.author.discriminator} ${id}`
        this["avatar_url"] = `https://cdn.discordapp.com/avatars/${data.author.id}/${data.author.avatar}?size=256`
        this["allowed_mentions"] = { "parse": [] }

    }

}