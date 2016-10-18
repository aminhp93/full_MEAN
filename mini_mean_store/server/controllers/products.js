var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    index: function(request, response) {
        Product.find({}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result);
            }
        })
    },
    create: function(request, response) {
        console.log(request.body);
        Product.create(request.body, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                Product.find({}, function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result);
                        response.json(result);
                    }
                })
            }
        })
    }
}
