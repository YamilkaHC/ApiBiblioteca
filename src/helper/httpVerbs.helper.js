const noFound = require('./404')


/**
 * @param {Object} Functions - Functions: {GET: Function, PUT: Function, POST: Function, DELETE: Function }
 * @param {String} method - http verb
 */
function httpVerbs(Functions, method) {
    return Functions[method] ?
        Functions[method] :
        (req, res) => noFound(req, res)
}

module.exports = httpVerbs;