const experss = require('express')

let server;

const startApp = async function() {
    var port = 3060;

    var app = experss();

    require('../server/routes')(app);

    server = app.listen(port);
    console.log(`> Listening at port: ${port}\n`)
}

startApp();
