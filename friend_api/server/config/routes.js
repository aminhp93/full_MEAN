var friends = require('../controllers/friends.js')

module.exports = function(app){
	app.get('/', function(request, response){
		mongooses.render('index.html');
	})
	app.get('/friend', friends.index)
}