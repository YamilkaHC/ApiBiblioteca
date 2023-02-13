const clientBD = require('../db/connection')

const serviceBook = async ({ offset, limit }) => {

    let results;
    try {
        if ((limit !== null || offset !== null)) {
            results = await clientBD.query(`SELECT * FROM book LIMIT ${limit} OFFSET ${limit * offset}`)
        }
        else {
            results = await clientBD.query(`SELECT * FROM book`)
        }
    }
    catch (error) {
        if (error) throw error;
    }
    return { data: results?.rows }
}

module.exports = serviceBook;