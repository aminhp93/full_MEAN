app.controller('topicController', function($scope, topicFactory, $location, userFactory, $cookies) {
    function getTopic(data) {
        $scope.topics = data;
    }

    topicFactory.getTopic(getTopic);

    $scope.createTopic = function() {
        $scope.topic['_user'] = $cookies.get('user_id');
        topicFactory.createTopic($scope.topic, getTopic);
        $scope.topic = {};
    }
})
