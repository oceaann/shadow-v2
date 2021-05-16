const { model, Schema } = require('mongoose')

const stateSchema = new Schema({

    state: {
        type: "number",
        required: true
    },

    id: {
        type: "string",
        required: true,
        unique: true
    }
    
}) 

module.exports = model('state', stateSchema)

// 0 - none, 1 - muted, 2 - premium, 3 - moderator