var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

module.exports = {
    index: function(request, response) {
        Topic.find({}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result);
            }
        })
    },
    get_one_topic: function(request, response) {
        Topic.find({ _id: request.params.topic_id }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.json(result);
            }
        })
    },
    create: function(request, response) {
        console.log(request.body);
        Topic.create(request.body, function(err, topic) {
            if (err) {
                console.log(err);
                console.log(1);
            } else {
                User.findOne({ _id: request.body._user }, function(err, user) {
                    if (err) {
                        console.log(err);
                        console.log(2);
                    } else {
                        console.log(user);
                        user._topic.push(topic._id);
                        user.save(function(err, result) {
                            if (err) {
                                console.log(err);
                            }
                            console.log(3);
                        });
                    }
                })
                response.redirect('/topics');
            }
        })
    }
}
