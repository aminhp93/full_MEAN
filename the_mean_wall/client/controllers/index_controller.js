app.controller('indexController', function($scope, $cookies) {
    $scope.nameVal = $cookies.get('name');
    $scope.addName = function(val) {
        $cookies.put('name', val);
    }
})
