const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

module.exports = class {

    constructor() {
        this.args = ["ssh"]
        this.developerOnly = true
    }

    async run(msg, args) {

        const { error, data, getter } = await exec(args.join(" "))

        if(error) return { embed: { description: `\`\`\`${JSON.stringify(error.message)}\`\`\`` }}
        else if(getter) return { embed: { description: `\`\`\`${JSON.stringify(getter)}\`\`\`` }}
        else return { embed: { description: `\`\`\`${JSON.stringify(data)}\`\`\`` }}

    }

}
