app.controller('ordersController', function($scope, ordersFactory) {
    function getProduct(data) {
        $scope.products = data;
    }

    function getCustomer(data) {
        $scope.customers = data;
    }

    function getOrder(data) {
        $scope.orders = data;
    }

    ordersFactory.getCustomer(getCustomer);
    ordersFactory.getProduct(getProduct);
    ordersFactory.getOrder(getOrder);

    $scope.addOrder = function() {
        ordersFactory.create($scope.order, getOrder);
        $scope.order = {}
    }
})
