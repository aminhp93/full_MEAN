var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

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
        console.log(request.body);
        Order.create(request.body, function(err, result) {
            if (err) {
                console.log(err);
            } else {
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
        Product.findOne({ name: request.body.product }, function(err, product) {
            if (err) {
                console.log(err);
            } else {
                console.log(product);
                product.quantity -= request.body.quantity;
                product.save(function(err, result) {
                    if (err) {
                        console.log(err);
                    }
                })
            }
        })
    }
}
