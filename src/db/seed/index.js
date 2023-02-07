const clientBD = require('../connection')
const AppSeeders = require('./appSeeder')

clientBD.connect(function(err) {
    if (err) throw err;
    new AppSeeders().run()
});