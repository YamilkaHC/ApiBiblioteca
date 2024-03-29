const servicePage = require("../services/page.service");

const pageByBookController = async (req, res) => {
    const id = req.url.split("/")[3]
    const id_page = req.url.split("/")[5]

    try {
        var book = await servicePage(id, id_page)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(book));
        return
    } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(e.message));
        return
    }


}

module.exports = pageByBookController;