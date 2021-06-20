const client = require("../../index")

module.exports = class cmd {

    constructor() {

        this.args = ["lock", "lock-down", "lockdown"]
        this.moderatorOnly = true
    }

    async run(msg, args) {

        if(client.lock) {
            client.lock = false
        } else {
            client.lock = true
        }

        return "Ustawiono"

    }

}
