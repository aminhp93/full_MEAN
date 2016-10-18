app.factory('ordersFactory', function($http) {
    var factory = {};
    var products = [];
    var customers = [];
    var orders = [];

    factory.getProduct = function(callback) {
        $http.get('/products').then(function(result) {
            products = result.data;
            callback(products);
        });
    }

    factory.getCustomer = function(callback) {
        $http.get('/customers').then(function(result) {
            customers = result.data;
            callback(customers);
        });
    }

    factory.getOrder = function(callback) {
        $http.get('/orders').then(function(result) {
            orders = result.data;
            callback(orders);
        });
    }

    factory.create = function(order, callback) {
        $http.post('/orders', order).then(function(result) {
            orders = result.data;
            callback(orders);
        })
        $http.get('/orders').then(function(result) {
            orders = result.data;
            callback(orders);
        });
    }
    return factory;

})
