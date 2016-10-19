app.controller('messageController', function($scope, messageFactory, $location, $routeParams, $cookies) {
    function getMessage(data) {
        $scope.messages = data;
        var total = 0;
        for (var i = 0; i < $scope.messages.length; i++) {
            total += $scope.messages[i]._comment.length;
        }
        $scope.total = total;
    }

    function getTopic(data) {
        $scope.topics = data;
    }

    $scope.result = 0;
    $scope.comment = {};

    messageFactory.getTopic($routeParams.id, getTopic);
    messageFactory.getMessage($routeParams.id, getMessage);

    $scope.createMessage = function() {
        $scope.message['_user'] = $cookies.get('user_id');
        messageFactory.createMessage($routeParams.id, $scope.message, getMessage);
        $scope.message = {};
    }

    $scope.createComment = function(_id) {
        $scope.comment[_id]['_user'] = $cookies.get('user_id');
        messageFactory.createComment(_id, $scope.comment[_id], getMessage);
        $scope.comment = {};
    }

    $scope.like = function() {
        messageFactory.like($routeParams.id, getMessage);
    }

    $scope.dislike = function() {
        messageFactory.dislike($routeParams.id, getMessage);
    }
})
