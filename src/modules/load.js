const userStateModel = require("../database/models/state")

const client = require("../index")

const db = async () => {
    
    const users = await userStateModel.find()

    const mutes = users.filter(u => u.state === 2)
    const mods = users.filter(u => u.state === 3)

    client.mutes = mutes.map(o => o.id)
    client.staff = mods.map(o => o.id)

}

db()