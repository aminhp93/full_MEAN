app.factory('messageFactory', function($http) {
    var factory = {};
    var messages = [];
    var topics = [];

    factory.index = function(topic_id, callback) {
        $http.get('/messages/' + topic_id).then(function(result) {
            messages = result.data;
            callback(messages);
        })
    }

    factory.getTopic = function(topic_id, callback) {
        $http.get('/topics/' + topic_id).then(function(result) {
            topics = result.data;
            callback(topics);
            console.log(topics);
        })
    }

    factory.create = function(topic_id, message, callback) {
        $http.post('/messages/' + topic_id, message).then(function(result) {
            messages = result.data;
            callback(messages);
        })
    }

    factory.createComment = function(message_id, comment, callback) {
        $http.post('/comments/' + message_id, comment).then(function(result) {
            messages = result.data;
            callback(messages);
        })

    }
    return factory;
})
