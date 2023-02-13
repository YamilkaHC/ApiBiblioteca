const booksController = require("../controller/books")
const pageByBookController = require("../controller/pageByBook")
const oneBookController = require("../controller/oneBook")
const url = require('url');
const httpVerbs = require('../helper/httpVerbs.helper')
const noFound = require('../helper/404')
const routeWithDynamicValues = require('../helper/routeWithDynamicValues.helper');
const pageByBookByTypeController = require("../controller/pageTypeByBook");

const routes = async (req, res) => {

    const path = url.parse(req.url, true).pathname;
    const method = req.method;


    if (path === '/api/book') {
        await httpVerbs({ GET: booksController }, method)(req, res)
    }
    else if (routeWithDynamicValues('/api/book/:id', path)) {
        await httpVerbs({ GET: oneBookController }, method)(req, res)
    }
    else if (routeWithDynamicValues('/api/book/:id-book/page/:id-page', path)) {
        await httpVerbs({ GET: pageByBookController }, method)(req, res)
    }
    else if (routeWithDynamicValues('/api/book/:id-book/page/:id-page/html', path)) {
        await httpVerbs({ GET: pageByBookByTypeController }, method)(req, res)
    }
    else if (routeWithDynamicValues('/api/book/:id-book/page/:id-page/text', path)) {
        await httpVerbs({ GET: pageByBookByTypeController }, method)(req, res)
    }
    else {
        noFound(req, res)
    }
}

module.exports = routes;