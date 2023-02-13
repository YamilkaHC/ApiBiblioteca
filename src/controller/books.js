const url = require('url');
const serviceBook = require('../services/book.service');

const booksController = async (req, res) => {

    const query = url.parse(req.url, true).query;
    let limit = query?.limit || null
    let offset = query?.offset || null
    try {
        var books = await serviceBook({ limit, offset })
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(books));
        return
    } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(e.message));
        return
    }


}

module.exports = booksController;