const client = require('../index')
const fs = require('fs')

fs.readdir('./src/modules', (err, files) => {
    files.forEach(file => {
        require(`../modules/${file}`)
    })
})