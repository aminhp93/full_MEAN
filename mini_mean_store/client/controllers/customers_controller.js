app.controller('customersController', function($scope, customersFactory) {
    function index(data) {
        $scope.customers = data;
    }

    customersFactory.index(index);

    $scope.addCustomer = function() {
        customersFactory.create($scope.customer, index);
        $scope.customer = {}
    }

    $scope.removeCustomer = function(_id) {
        customersFactory.delete(_id, index);
    }
})
