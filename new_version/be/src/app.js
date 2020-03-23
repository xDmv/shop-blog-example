const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'build')));
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

const get = require('./middleware/get');


app.get('/api/db', (req,res)=>{
	// res.status(201).json({'status API':  true, 'version': '1.0.1'})
	get.getTest(req, res);
});


app.get('/api/test', (req,res)=>{
	res.status(200).json({'status API':  true, 'version': '1.0.0'})
});


app.use(function(req, res, next) {
	res.status(401).json({'status API': true, 'success': 'false','version': '1.0.0'});
});

// app.use(function(err, req, res, next) {
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get('env') === 'development' ? err : {};

// 	res.status(err.status || 500);
// 	res.render('error');
// });

module.exports = app;