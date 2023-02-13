const clientBD = require('../db/connection')

const servicePageByType = async (id, id_page, typeContent) => {

    let type = typeContent === "html"? "html_content": "content"
    let results;
    try {
        if (id && id_page && typeContent) {
            results = await clientBD.query(`select page.${type} from page where page_number=${id_page} and book_id=${id} `)
        }
        else {
            results = "error id or id_page doesn't provided"
        }
    }
    catch (error) {
        if (error) throw error;
    }
    return { data: results?.rows || results }
}

module.exports = servicePageByType;