app.controller('userController', function($scope, userFactory, $location, $cookies) {
    function getUser(data) {
        $scope.users = data;
        $cookies.put('username', $scope.users.name);
        $cookies.put('user_id', $scope.users._id);

        if (!$scope.users.errors) {
            $scope.user = {};
            $location.url('/dashboard');
        }
    }
    $scope.regex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}'

    $scope.createUser = function() {
        userFactory.createUser($scope.user, getUser);
    }
})
