var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

module.exports = {
    create: function(request, response) {

        Message.findOne({ _id: request.params.message_id }, function(err, message) {
            if (err) {
                console.log(err);
            } else {
                var comment = new Comment({ comment: request.body.comment });
                comment._message = message._id;
                comment.name = message.name;
                message._comment.push(comment);
                console.log(comment);
                comment.save(function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        message.save(function(err, result) {
                            if (err) {
                                console.log(err);
                            } else {
                                // return all the messages
                                response.redirect('/messages/' + message._topic)
                            }
                        })
                    }
                })
            }
        })
    }
}
