var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
	index: function(request, resposne){
		Friend.find({}, function(err, result){
			if (err){
				console.log(err);
			} else {
				res.json(result);
			}
		})
	}
}