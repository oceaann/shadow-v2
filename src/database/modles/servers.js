const { model, Schema } = require('mongoose')

const serverSchema = new Schema({

    guild: {
        type: "string",
        required: true,
        unique: true
    },

    channel: {
        type: "string",
        required: true,
        unique: true
    }
    
}) 

module.exports = model('server', serverSchema)