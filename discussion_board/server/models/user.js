var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, minlength: 2, unique: true },
    _topic: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }],
    _message: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    _comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

mongoose.model('User', UserSchema);
