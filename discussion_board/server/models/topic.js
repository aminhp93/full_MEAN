var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
    name: { type: String },
    title: { type: String },
    category: { type: String },
    description: { type: String },
    _message: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
}, { timestamps: true });

mongoose.model('Topic', TopicSchema);
