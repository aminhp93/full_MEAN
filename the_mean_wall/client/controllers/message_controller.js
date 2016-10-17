app.controller('messageController', function($scope, messageFactory, $cookies, $location) {
    function index(data) {
        $scope.messages = data;
    }
    $scope.comment = {};

    messageFactory.index(index);

    $scope.nameVal = $cookies.get('name');
    $scope.addName = function(val) {
        $cookies.put('name', val);
        $location.url('/messages');
    }

    $scope.addMessage = function() {
        messageFactory.create($scope.message, index);
        console.log($scope.message);
        console.log($scope.nameVal);
        $scope.message = {};
    }

    $scope.addComment = function(_id) {
        messageFactory.createComment(_id, $scope.comment[_id], index);
        $scope.comment = {};
    }
})
