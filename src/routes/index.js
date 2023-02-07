const booksController = require("../controller/books")
const pageByBookController = require("../controller/pageByBook")
const oneBookController = require("../controller/oneBook")


const routes = (req, res) => {

    //GET ENDPOINTS
    if (req.method === "GET") {

        let parts = req.url.replace("/api", "").split('/');
        console.log(req.url);
        if (req.url === "/api/books" && parts.length === 2) {
            booksController(req, res)
        } else if (req.url.includes("/book/") && parts.length === 3 && !isNaN(Number(parts[2]))) {
            oneBookController(req, res)
        } else if (req.url.includes("/book/") && parts.length === 5 && !isNaN(Number(parts[4]))) {
            pageByBookController(req, res)
        } else {
            res.writeHead(404, { 'Content-Type': "text/plain" })
        }
    }

}

module.exports = routes;