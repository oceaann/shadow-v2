const { model, Schema } = require('mongoose')

const prefixSchema = new Schema({

    guild: {
        type: "string",
        required: true,
        unique: true
    },

    prefix: {
        type: "string",
        required: true,
        unique: false
    },
    
})

module.exports = model('prefix', prefixSchema)