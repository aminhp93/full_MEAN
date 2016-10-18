app.factory('productsFactory', function($http) {
    var factory = {};
    var products = [];

    factory.index = function(callback) {
        $http.get('/products').then(function(result) {
            products = result.data;
            callback(products);
        });
    }

    factory.create = function(product, callback) {
        $http.post('/products', product).then(function(result) {
            products = result.data;
            callback(products);
        })
    }
    return factory;

})
