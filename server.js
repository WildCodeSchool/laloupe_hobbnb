// set up ======================================================================
var http = require('http');
var express = require('express');
var app = express(); // create our app w/ express
var port = process.env.PORT || 8000; // set the port
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('./app/logs/logger');
// configuration ===============================================================
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.json({
    limit: '10mb',
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
// picture thumb ==================================================================
// Mongoose ====================================================================
require('./config/database');
// Serveur ===================================================================
var server = http.Server(app);
// routes ======================================================================
require('./app/routes')(app);
require('./app/emails/email')(app);
process.on('SIGINT', function() {
    logger.warn('Hobbnb shutdown!');
    process.exit();
});
// listen (start app with node server.js) ======================================
server.listen(port);
logger.warn('Hobbnb started at port ' + port + ', loggin in console and file app/logs/hobbnb.log :)');
