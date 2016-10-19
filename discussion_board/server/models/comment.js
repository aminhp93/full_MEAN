var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    comment: { type: String },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    _message: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' }
}, { timestamps: true })

mongoose.model('Comment', CommentSchema);
