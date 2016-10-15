var friends = require('../controllers/friends.js')

module.exports = function(app){

	app.get('/friends', friends.index);
	app.get('/friends/:id', function(req, res){
		console.log(req.body);
		friends.show(req, res);
	});
	app.post('/friends', friends.create);
	app.put('/friends/:id', friends.update);
	app.delete('/friends/:id', friends.delete);
	app.post('/login', friends.login);
}