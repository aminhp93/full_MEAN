app.controller('topicController', function($scope, topicFactory, $cookies, $location) {
    function index(data) {
        $scope.topics = data;
    }

    topicFactory.index(index);

    $scope.nameVal = $cookies.get('name');
    $scope.addName = function(val) {
        $cookies.put('name', val);
        $location.url('/dashboard');
    }

    $scope.addTopic = function() {
        $scope.topic['name'] = $scope.nameVal;
        console.log($scope.topic);
        topicFactory.create($scope.topic, index);
        $scope.topic = {};
    }
})
