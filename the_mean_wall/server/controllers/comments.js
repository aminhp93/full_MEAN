var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

module.exports = {
    create: function(request, response) {
        // console.log('1');
        // console.log(request.params);
        // console.log(request.body);
        Message.findOne({ _id: request.params.id }, function(err, message) {
            if (err) {
                console.log(err);
            } else {
                // console.log(message);
                var comment = new Comment({ comment: request.body.comment });
                comment._message = message._id;
                message._comment.push(comment);
                comment.save(function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        message.save(function(err, result) {
                            if (err) {
                                console.log(err);
                            }
                        })
                    }
                })
            }
        })
    }
}
