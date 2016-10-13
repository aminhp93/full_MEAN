// var mongooses = require('../controllers/mongooses.js')

module.exports = function(app){
	app.get('/', function(request, response){
		mongooses.render('index.html');
	})
}