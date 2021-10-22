'use strict'
const sqlite = require('sqlite3');
const COLOR = require('../lib/strcolors');


module.exports.dbInit = (callback) => {
    let db = new sqlite.Database('./model/localdb.db', callback);
    return db;
}