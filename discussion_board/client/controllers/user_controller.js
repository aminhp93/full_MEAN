app.controller('userController', function($scope, userFactory, $location, $cookies) {
    function getUser(data) {
        $scope.users = data;
        $cookies.put('username', $scope.users.name);
        $cookies.put('user_id', $scope.users._id);
    }

    $scope.createUser = function() {
        userFactory.createUser($scope.user, getUser);
        $location.url('/dashboard');
    }
})
