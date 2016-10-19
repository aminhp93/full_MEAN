var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'topicController'
        })
        .when('/dashboard', {
            templateUrl: 'partials/topic.html',
            controller: 'topicController'
        })
        .when('/topics/:id', {
            templateUrl: 'partials/messages.html',
            controller: 'messageController'
        })
        .otherwise({
            redirectTo: '/'
        })
})
