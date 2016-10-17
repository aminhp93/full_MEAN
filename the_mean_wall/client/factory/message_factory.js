app.factory('messageFactory', function($http) {
    var factory = {};
    var messages = [];

    factory.index = function(callback) {
        $http.get('/messages').then(function(result) {
            messages = result.data;
            callback(messages);
        })
    }

    factory.create = function(message, callback) {
        $http.post('/messages', message).then(function(result) {
            messages = result.data;
            callback(messages);
        })

    }

    factory.createComment = function(id, comment, callback) {
        $http.post('/messages/' + id, comment).then(function(result) {
            messages = result.data;
            callback(messages);
        })

    }
    return factory;
})
