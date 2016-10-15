app.factory('userFactory', function($http){
	var factory = {};
	var users = [];

	factory.login = function(user, callback){
		$http.post('/login', user).then(function(result){
			users = result.data;
			callback(users);
		})
	}

	factory.index = function(callback){
		$http.get('/friends').then(function(result){
			// console.log(result.data);
			users = result.data;
			callback(users);
		})
	}

	factory.create = function(user, callback){
		$http.post('/friends', user).then(function(result){
			// console.log(result.data);
			users = result.data;
			console.log('AMin');
			console.log(result.data);
			callback(users);
		})
	}

	factory.show = function(_id, callback){
		// console.log(_id);
		$http.get('/friends/' + _id).then(function(result){
			// console.log(result.data);
			users = result.data;
			callback(users[0]);
		})
	}

	factory.update = function(_id, user, callback){
		$http.put('/friends/' + _id, user).then(function(result){
			users = result.data;
			callback(users[0]);
		})
	}

	factory.delete = function(_id, callback){
		$http.delete('/friends/' + _id).then(function(result){
			// console.log(result);
		})
		$http.get('/friends').then(function(result){
			users = result.data;
			callback(users);
		})
	}
	return factory;
})