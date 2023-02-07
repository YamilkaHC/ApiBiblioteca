const http = require('http');
const routes = require('./src/routes')
require('dotenv').config();

const server = http.createServer((req, res) => {
    if(req.url.includes("/api")){
        routes(req, res)
    }
    if(req.url === "/"){
        res.writeHead(200, {
            'Content-Type': "text/plain"
        })
        res.write("Server running   ")
        res.end();
    }
});

const PORT = process.env.PUBLIC_API_PORT;

server.listen(PORT, () => console.log(`Server running on ${PORT} ✨✨✨`));

module.exports = server;