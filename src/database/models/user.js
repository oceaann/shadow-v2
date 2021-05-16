const { model, Schema } = require('mongoose')

const userSchema = new Schema({

    user: {
        type: "string",
        required: true,
        unique: true
    },

    id: {
        type: "number",
        required: true,
    },
    
}) 

module.exports = model('user', userSchema)