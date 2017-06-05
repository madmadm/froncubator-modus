var express = require('express');
var fs = require('fs');
var app = express();
var cors = require('cors')

app.use(express.static('build'));

app.get('*', function(req, res){
	fs.readFile('./build/templates/index.html','utf8',function(err, data){
		console.log(data);
		res.send(data);
	});
});

app.listen('3333');