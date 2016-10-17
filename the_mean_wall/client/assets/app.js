var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'messageController'
        })
        .when('/messages', {
            templateUrl: 'partials/messages.html',
            controller: 'messageController'
        })
        .otherwise({
            redirectTo: '/'
        })
})
