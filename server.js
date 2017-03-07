'use strict';

var express = require('express');



var app = express();


app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/index.html');
});

var port = process.env.PORT || 8000;

app.listen(port, function () {
	console.log("Server running on port: " + port);
});