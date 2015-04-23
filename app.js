'use strict';

var express = require('express');
var logger = require('morgan');

var app = express();
var env = process.env.NODE_ENV || 'dev';
var port = process.env.PORT || 3000;

app.use(logger(env));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

require('./src/routes')(app);

app.listen(port, function () {
    console.log('Application is running on port ' + port);
});