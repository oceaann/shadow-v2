const client = require("../../index")

module.exports = class cmd {

    constructor() {
        this.args = ["clear", "purge"]
        this.moderatorOnly = true
    }

    async run(msg, args) {

        if(!args[0]) return "Podaj ilość wiadomości do wyczyszczenia"

        let success = 0
        
        for(const ch of client.gchannels) {

            try {

                const m = await client.getMessages(ch, {
                    limit: Number(args[0])
                })

                const messages = m.map(m => m.id)

                console.log(messages)

                if(!m) return

                await client.deleteMessages(
                    ch,
                    messages,
                    "Global chat messages clear"
                )

                success++

            } catch(e) {}

        }

        return `Udało się usunąć wiadomości z ${success}/${client.gchannels.length} kanałów`

    }

}