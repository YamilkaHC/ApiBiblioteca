const http = require('http');
const routes = require('./src/routes')
const config = require('./config')
const clientBD = require('./src/db/connection')


const server = http.createServer((req, res) => {

    if (req.url.includes("/api")) {
        routes(req, res)
    } else if (req.url === "/") {
        res.writeHead(200, {
            'Content-Type': "text/plain"
        })
        res.write("Server running")
        res.end();
    }
});

server.listen(config.api.port, () => console.log(`Server running on ${config.api.port} ✨✨✨`));

clientBD.connect(function(err) {
    if (err) throw err;
    console.log("Connected db!");
});


module.exports = server;