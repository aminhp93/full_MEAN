var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
    title: { type: String },
    category: { type: String },
    description: { type: String },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    _message: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
}, { timestamps: true });

mongoose.model('Topic', TopicSchema);
