var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Topic = mongoose.model('Topic');

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
        Topic.create(request.body, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                response.redirect('/topics');
            }
        })
    }
}
