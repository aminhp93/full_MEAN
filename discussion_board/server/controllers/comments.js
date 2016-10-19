var mongoose = require('mongoose');
var User = mongoose.model('User');
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
                comment._user = request.body._user;
                comment.save(function(err, comment_result) {
                    if (err) {
                        console.log(err);
                    } else {
                        message._comment.push(comment_result._id);
                        message.save(function(err, message_result) {
                            if (err) {
                                console.log(err);
                            } else {
                                User.findOne({ _id: request.body._user }, function(err, user) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        user._comment.push(comment_result._id);
                                        response.redirect('/messages/' + message._topic)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
}
