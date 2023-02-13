const serviceOneBook = require("../services/bookOne.service");

const onBookController = async (req, res) => {

    const id = req.url.split("/")[3]
    try {
        var book = await serviceOneBook(id)
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(book));
        return
    } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(e.message));
        return
    }

}

module.exports = onBookController;