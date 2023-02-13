const clientBD = require('../db/connection')

const serviceOneBook = async (id) => {

    let results;
    try {
        if (id) {
            results = await clientBD.query(`SELECT * FROM book WHERE id=${id}`)
        }
        else {
            results = "error id doesn't provided"
        }
    }
    catch (error) {
        if (error) throw error;
    }
    return { data: results?.rows || results }
}

module.exports = serviceOneBook;