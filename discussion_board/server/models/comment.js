var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	name: {type: String},
	comment: {type: String},
	_message: {type: mongoose.Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps: true})

mongoose.model('Comment', CommentSchema);