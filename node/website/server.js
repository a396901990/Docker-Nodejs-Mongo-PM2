const express = require('express');
const log4js = require('log4js');
const mongoose = require('mongoose');
// Creates an Express application
let app = express();

// Init logger
log4js.configure('./log4js.json');

global.logger = log4js.getLogger('hello');

// Assigns settings
app.set('port', 8888);

// Routes HTTP GET requests
app.get('/', (req, res) => {
    console.info('On request: hello world');
    global.logger.info(req.method, req.path);
    res.send('Hello world --- from nodejs docker image\n');
});

// Binds and listens
app.listen(app.get('port'), () => {
    console.info('Listen port %s for app', app.get('port'));
});
