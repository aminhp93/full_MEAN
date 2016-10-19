app.controller('messageController', function($scope, messageFactory, $cookies, $location, $routeParams) {
    function index(data) {
        $scope.messages = data;
    }

    function getTopic(data) {
        $scope.topics = data;
    }

    $scope.comment = {};

    messageFactory.getTopic($routeParams.id, getTopic);
    messageFactory.index($routeParams.id, index);


    $scope.addMessage = function() {
        messageFactory.create($routeParams.id, $scope.message, index);
        $scope.message = {};
    }

    $scope.addComment = function(_id) {
        $scope.comment['name'] = $scope.nameVal;
        messageFactory.createComment(_id, $scope.comment[_id], index);
        $scope.comment = {};
    }
})
