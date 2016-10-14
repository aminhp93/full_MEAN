var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
	index: function(request, response){
		Friend.find({}, function(err, result){
			if (err){
				console.log(err);
			} else {
				response.json(result);
			}
		})
	},
	show: function(request, response){
		Friend.find({_id: request.params.id}, function(err, result){
			if (err){
				console.log(err);
			} else {
				response.json(result);
			}
		})
	},
	create: function(request, response){
		Friend.create(request.body, function(err, result){
			if (err){
				console.log(err);
			} else {
				response.json(result);
			}
		})
	},
	update: function(request, response){
		Friend.findOne({_id: request.params.id}, function(err, friend){
			if (err){
				console.log(err);
			} else {
				friend.first_name = request.body.first_name;
				friend.last_name = request.body.last_name;
				friend.birthday = request.body.birthday;
				friend.save(function(err, result){
					if (err){
						console.log(err);
					} else {
						response.json(result);
					}
				})
			}
		})
	},
	delete: function(request, response){
		Friend.remove({_id: request.params.id}, function(err){
			if (err){
				console.log(err);
			} else {
				response.json({message: "Delete failed"});
			}
		})
	}


}