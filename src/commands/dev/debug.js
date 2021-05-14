const client = require("../../index")

module.exports = class {

    constructor() {
        this.args = ["debug"]
        this.developerOnly = true
    }

    run(msg, args) {
        
        if(!args[0]) return `debug true .? false`
        
        const v = Boolean(args)

        if(!v) return `debug true .? false`

        client.debug = v

        return `Ustawiono tryb debugowania na: ${v}`

    }

}