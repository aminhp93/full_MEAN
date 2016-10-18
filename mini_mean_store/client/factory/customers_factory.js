app.factory('customersFactory', function($http) {
    var factory = {};
    var customers = [];

    factory.index = function(callback) {
        $http.get('/customers').then(function(result) {
            customers = result.data;
            callback(customers);
        });
    }

    factory.create = function(customer, callback) {
        $http.post('/customers', customer).then(function(result) {
            customers = result.data;
            callback(customers);
        })
    }

    factory.delete = function(_id, callback) {
        $http.delete('/customers/' + _id).then(function(result) {
            customers = result.data;
            callback(customers);
        })
    }
    return factory;

})
