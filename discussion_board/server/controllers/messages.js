var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Topic = mongoose.model('Topic');
var User = mongoose.model('Topic');

module.exports = {
    index: function(request, response) {
        Message.find({ _topic: request.params.topic_id })
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
        Topic.findOne({ _id: request.params.topic_id }, function(err, topic_result) {
            message = new Message();
            message._topic = request.params.topic_id;
            message.message = request.body.message;
            message._user = request.body._user;
            message.save(function(err, message_result) {
                if (err) {
                    console.log(err);
                } else {
                    topic_result._message.push(message_result._id);
                    topic_result.save(function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            User.findOne({ _id: request.body._user }, function(err, user) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    user._message.push(message_result._id);
                                    user.save(function(err, result) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            response.redirect('/messages/' + request.params.topic_id);
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        })
    },
    like: function(request, response) {
        Message.findOne({ _topic: request.params.topic_id }, function(err, topic_result) {
            if (err) {
                console.log(err);
            } else {
                topic_result.like += 1;
                topic_result.save(function(err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
                response.redirect('/messages/' + request.params.topic_id);
            }
        })
    },
    dislike: function(request, response) {
        Message.findOne({ _topic: request.params.topic_id }, function(err, topic_result) {
            if (err) {
                console.log(err);
            } else {
                topic_result.dislike += 1;
                topic_result.save(function(err, result) {
                    if (err) {
                        console.log(err);
                    }
                });
                response.redirect('/messages/' + request.params.topic_id);
            }
        })
    }
}
