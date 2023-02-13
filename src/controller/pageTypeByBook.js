

const servicePageByType = require("../services/pageByType.service");

const pageByBookByTypeController = async (req, res) => {
    const id = req.url.split("/")[3]
    const id_page = req.url.split("/")[5]
    const typeContent = req.url.split("/")[6]

    try {
        var book = await servicePageByType(id, id_page, typeContent)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(book));
        return
    } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(e.message));
        return
    }


}

module.exports = pageByBookByTypeController;