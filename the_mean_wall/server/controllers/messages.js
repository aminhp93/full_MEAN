var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = {
    index: function(request, response) {
        Message.find({})
            .populate('_comment')
            .exec(function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    response.json(result);
                }
            })
    },
    create: function(request, response) {
        Message.create(request.body, function(err, result) {
            if (err) {
                console.log(err);
            }
        })
    }

}
