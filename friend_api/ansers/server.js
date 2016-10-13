var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

// app.use(bodyParser.json());

require('./server/config/routes.js')(app);
require('./server/config/mongoose.js');
// 
app.listen(3000, function(){
	console.log('FILE STRUCTURE on port 3000');
})