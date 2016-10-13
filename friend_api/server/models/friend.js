var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	first_name: {type: String},
	last_namee: {type: String},
	birthday: {type: String}
}, {timestamps: true});

mongoose.model('Friend', FriendSchema);