'use strict';

module.exports = function(app) {
    app.route('/api/ping').get((req, res) => {
        return res.json({ping: "pong"});
    })
}
