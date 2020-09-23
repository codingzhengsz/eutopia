'use strict';

const mysql = require('mysql');
const _ = require('lodash');

const config = require('./config')[process.env.NODE_ENV];

exports.init = async function() {
    let mysqlConfigs = _.get(config.db, 'config', {})

    return mysql.createPool(mysqlConfigs);
}
