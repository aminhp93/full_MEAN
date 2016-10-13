app.factory('userFactory', function($http){
	var factory = {};
	var users = [{first_name: 'Minh', last_name: 'Pham', birthday: 'May/1993'}];

	factory.index = function(callback){
		callback(users);
	}

	factory.create = function(user){
		users.push(user)
	}

	factory.show = function(id, callback){
		callback(users[id]);
	}

	factory.update = function(id, user, callback){
		users[id] = user;
		callback(users);
	}

	factory.delete = function(id, callback){
		users.splice(id, 1);
		callback(users);
	}
	return factory;
})