app.factory('topicFactory', function($http) {
    var factory = {};
    var topics = [];

    factory.getTopic = function(callback) {
        $http.get('/topics').then(function(result) {
            topics = result.data;
            callback(topics);
        })
    }

    factory.createTopic = function(topic, callback) {
        $http.post('/topics', topic).then(function(result) {
            topics = result.data;
            callback(topics);
        })
    }
    return factory;
})
