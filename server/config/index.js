const config = require('./default')
module.exports = process.env === 'development' ? config : {}
