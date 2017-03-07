'use strict';

var express = require('express');
var app = express();

// Load local if not in production
if (process.env.NODE_ENV !== 'production')
	try {
		require('./local');
	}
	catch (error) {
		throw "local.js file required for development mode";
	}

// Config mail server
i

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/index.html');
});

var port = process.env.PORT || 8000;

app.listen(port, function () {
	console.log("Server running on port: " + port);
});