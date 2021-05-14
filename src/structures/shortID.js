const userModel = require("../database/modles/user")
const client = require("../index")

module.exports = class {

    constructor(userID) {

        this.userID = userID

    }

    async get() {

        let id = client.ids[this.userID]
        if(!id) {
            id = await this.fetch()
        }

        if(!id) {
            throw "Unable to fetch/create user in database"
        }
        
        this.id = id
        return id

    }

    async fetch() {
        
        const db = await userModel.findOne({ user: this.userID })

        if(!db) {
            return await this.create()
        }

        client.ids[this.userID] = db.id
        return db.id

    }

    async create() {

        const new_id = await userModel.countDocuments().exec()
        userModel.insertMany([{user: this.userID, id: new_id}])

        client.ids[this.userID] = new_id
        return new_id

    }

    toNicknameString() {

        if((this.id === null) || (this.id === undefined)) throw "Fetch user befor using toNicknameString"
        // !this.id returns erros when user id is 0 

        this.stringID = String(this.id)

        if(this.stringID.length < 3)  return `${"0".repeat(3 - this.stringID.length)}${this.stringID} 0`
        else if(this.stringID.length === 3) return `${this.stringID} 0`
        else return `${this.stringID.slice(this.stringID.length - 3)} ${this.stringID.substr(0, this.stringID.length - 3)}`

    }

}