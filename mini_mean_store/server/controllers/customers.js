var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
    index: function(request, response) {
        Customer.find({}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result);
            }
        })
    },
    create: function(request, response) {
        Customer.create(request.body, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                Customer.find({}, function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        response.json(result);
                    }
                })
            }
        })
    },
    delete: function(request, response) {
        Customer.remove({ _id: request.params.id }, function(err) {
            if (err) {
                console.log(err);
            } else {
                Customer.find({}, function(err, result) {
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
