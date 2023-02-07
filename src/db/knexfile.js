require('dotenv').config({ path: '../../.env' });


module.exports = {
    client: 'pg',
    connection: {
        host: process.env.PUBLIC_DB_HOST,
        user: process.env.PUBLIC_DB_USER,
        password: process.env.PUBLIC_DB_PASSWORD,
        database: process.env.PUBLIC_DB_NAME
    },
    migrations: {
        directory: './migrations'
    }
}