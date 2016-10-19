var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Topic = mongoose.model('Topic');

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
            message.name = topic_result.name;
            message.save(function(err, message_result) {
                if (err) {
                    console.log(err);
                } else {
                    topic_result._message.push(message_result._id);
                    topic_result.save(function(err, result) {
                        if (err) {
                            console.log(err);
                        }
                    })
                } // put message_id into topics
                response.redirect('/messages/' + request.params.topic_id);
                // populate the comments
            })
        })
    }
}
