app.factory('topicFactory', function($http) {
    var factory = {};
    var topics = [];

    factory.index = function(callback) {
        $http.get('/topics').then(function(result) {
            topics = result.data;
            callback(topics);
        })
    }

    factory.create = function(topic, callback) {
        $http.post('/topics', topic).then(function(result) {
            topics = result.data;
            callback(topics);
        })

    }
    return factory;
})
