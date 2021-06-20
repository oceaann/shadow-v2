const client = require("../../index")

module.exports = class {

    constructor() {
        this.args = ["eval"]
        this.developerOnly = true
    }

    async run(msg, args) {

        if(!client.debug) return "Komenda eval jest dostępna jedynie w trybie debugowania"

        const code = args.join(" ")

        try {
            
            let evaled = await eval(code)

            if (typeof evaled !== "string") evaled = require("util").inspect(evaled)

            return ({ embed: { description: `\`\`\`${evaled}\`\`\`` } })

        } catch (e) {

            return { embed: { description: `\`\`\`${e}\`\`\`` } }

        }

    }

}
