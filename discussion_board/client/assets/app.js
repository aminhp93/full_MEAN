var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'userController'
        })
        .when('/dashboard', {
            templateUrl: 'partials/topic.html',
            controller: 'topicController'
        })
        .when('/topics/:id', {
            templateUrl: 'partials/messages.html',
            controller: 'messageController'
        })
        .when('/users/:id', {
            templateUrl: 'partials/user.html',
            controller: 'messageController'
        })
        .otherwise({
            redirectTo: '/'
        })
})
