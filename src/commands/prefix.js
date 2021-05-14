module.exports = class cmd {

    constructor() {
        this.args = ["prefix"]
        this.permissions = ["ADMINISTRATOR"]
    }

    run(msg, args) {
        console.log(msg)
    }

}