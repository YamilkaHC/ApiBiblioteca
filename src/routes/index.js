const booksController = require("../controller/books")
const pageByBookController = require("../controller/pageByBook")
const oneBookController = require("../controller/oneBook")
const url = require('url');
const httpVerbs = require('../helper/httpVerbs.helper')
const noFound = require('../helper/404')

const routes = (req, res) => {

    const path = url.parse(req.url, true).pathname;
    const method = req.method;


    switch (path) {

        case '/api/book':
            httpVerbs({ GET: booksController }, method)(req, res)
            break;

        case '/api/book/:id':
            httpVerbs({ GET: oneBookController }, method)(req, res)
            break;

        case '/api/book/:id-book/page/:id-page':
            httpVerbs({ GET: pageByBookController }, method)(req, res)
            break;

        default:
            noFound(req, res)
            break;
    }


}

module.exports = routes;