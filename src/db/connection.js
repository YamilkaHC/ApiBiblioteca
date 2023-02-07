const { Client } = require('pg')
const config = require('../../config')


const clientBD = new Client({
    user: config.db.userName,
    host: config.db.hostName,
    database: config.db.database,
    password: config.db.password,
    port: 5432,
})


module.exports = clientBD;