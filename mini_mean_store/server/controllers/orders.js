var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
    index: function(request, response) {
        Order.find({}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result);
            }
        })
    },
    create: function(request, response) {
        Order.create(request.body, function(err, result) {
            if (err) {
                console.log(err);
                // } else {
                // Order.find({}, function(err, result) {
                //     if (err) {
                //         console.log(err);
                //     } else {
                //         console.log(result);
                //         response.json(result);
                //     }
                // })
                response.redirect('/orders');

            }
        })
    }
}
