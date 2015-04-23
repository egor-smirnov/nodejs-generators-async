'use strict';

module.exports = function (app) {
    app.get('/typical', function (req, res) {
        res.render('main', {
            content: 'test'
        });
    });
};