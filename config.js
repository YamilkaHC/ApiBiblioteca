require('dotenv').config();

var config = {
    api: {
        port: process.env.PUBLIC_API_PORT
    },
    db: {
        hostName: process.env.PUBLIC_DB_HOST,
        userName: process.env.PUBLIC_DB_USER,
        password: process.env.PUBLIC_DB_PASSWORD,
        database: process.env.PUBLIC_DB_NAME,

    }
};

module.exports = config;