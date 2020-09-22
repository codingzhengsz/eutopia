if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

const experss = require('express')

const config = require('./configs/config')[process.env.NODE_ENV]

let server;

const startApp = async function() {
    var port = process.env.PORT || config.port;

    var app = experss();

    require('../server/routes')(app);

    server = app.listen(port);
    console.log(`> Listening at port: ${port}\n`)
}

startApp();
