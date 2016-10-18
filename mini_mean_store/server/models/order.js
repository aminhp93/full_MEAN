var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    customer: { type: String },
    product: { type: String },
    quantity: { type: Number }
}, { timestamps: true })

mongoose.model('Order', OrderSchema);
