const express = require('express');
const log4js = require('log4js');
const mongoose = require('mongoose');
// Creates an Express application
let app = express();

let mongoUrl = 'mongodb://mongo:27017/test';
mongoose.connect(mongoUrl);
let Monkey = mongoose.model('Monkey', { name: String });

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


app.get('/hello', (req, res) => {
	    console.info('On request: hello world');
			    res.send('Hello world --- from nodejs docker image\n');
});


app.get('/mongo/insert', (req, res) => {
	    let newData = { name: req.query.name };
			    let newMonkey = new Monkey(newData);

					    newMonkey.save(err => {
								        if (err) {
													            global.logger.error('Insert data failed: ', err, newData);
																			            res.json({
																										                RetCode: 100,
																																		                ErrMsg: 'Insert data failed'
																																											            });
																									            return;
																															        }

												        global.logger.info('Insert data success:', newData);
																        res.json({
																					            RetCode: 0
																												        });
																				    });
});


// Binds and listens
app.listen(app.get('port'), () => {
    console.info('Listen port %s for app', app.get('port'));
});
