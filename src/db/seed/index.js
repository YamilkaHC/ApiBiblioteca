const clientBD = require('../connection')
const bookSeed = require('./book/index')
const pagesSeed = require("./page/index")

clientBD.connect(function(err) {
    if (err) throw err;

    bookSeed(clientBD)
    pagesSeed(clientBD)
});