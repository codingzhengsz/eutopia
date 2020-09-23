if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

const experss = require('express')

const dbConn = require('./configs/dbConn');
const config = require('./configs/config')[process.env.NODE_ENV]

let server;

let readyPromise = new Promise(() => {});

const startApp = async function() {
    await dbConn.init();

    var port = process.env.PORT || config.port;

    var app = experss();

    require('../server/routes')(app);

    server = app.listen(port);
    console.log(`> Listening at port: ${port}\n`)
}

startApp();

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close();
    }
}