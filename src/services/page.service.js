const clientBD = require('../db/connection')

const servicePage = async (id, id_page) => {

    let results;
    try {
        if (id && id_page) {
            results = await clientBD.query(`select * from page where page_number=${id_page} and book_id=${id} `)
        }
        else {
            results = "error id or id_page  doesn't provided"
        }
    }
    catch (error) {
        if (error) throw error;
    }
    return { data: results?.rows || results }
}

module.exports = servicePage;