var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client')))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(3000, function(){
	console.log('FILE STRUCTURE on port 3000');
})
