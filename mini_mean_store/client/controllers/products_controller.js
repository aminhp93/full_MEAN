app.controller('productsController', function($scope, productsFactory) {
    function index(data) {
        $scope.products = data;
    }

    productsFactory.index(index);

    $scope.addProduct = function() {
        productsFactory.create($scope.product, index);
        $scope.product = {}
    }
})
