var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
	this.index = function(req, res){
		Friend.find({}, function(err, result){
			if (err){
				console.log(err);
			} else {
				res.json(result);
			}
		})
	}

	this.create = function(req, res){
		Friend.create(req.body, function(err, result){
			if (err){
				console.log(err);
			} else {
				res.json(result);
			}
		})
	}

	this.update = function(req,res){
		Friend.findOne({_id: request.params.id}, function(err, friend){
			if (err){
				console.log(err);
			} else {
				friend.first_name = req.body.first_name;
				friend.last_name = req.body.last_name;
				friend.birthday = req.body.birthday;
				friend.save(function(err, result){
					if (err){
						console.log(err);
					} else {
						res.json(result);
					}
				})
			}
		});
	};

	this.delete = function(req,res){
		Friend.remove({_id: req.params.id}, function(err){
			if (err){
				console.log(err);
			} else {
				res.json({message: "friend deleted"});
			}
		})
	};

	this.show = function(req,res){
		Friend.findOne({_id: request.params.id}, function(err, result){
			if (err){
				console.log(err);
			} else {
				res.json(result);
			}
		})
	};
}

module.exports = new FriendsController();