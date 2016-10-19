var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    name: { type: String },
    message: { type: String },
    _topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
    _comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

mongoose.model('Message', MessageSchema);
