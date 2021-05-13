const { connect } = require("mongoose")

const { URL } = require("../config/config")

connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})