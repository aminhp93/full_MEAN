var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    message: { type: String },
    like: { type: Number, default: 0 },
    dislike: { type: Number, default: 0 },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    _topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
    _comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

mongoose.model('Message', MessageSchema);
