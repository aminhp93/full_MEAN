var app = angular.module('app', ['ngRoute']);

		app.config(function($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: 'partials/index.html',
					controller: 'indexController'
				})	
				.when('/new', {
					templateUrl: 'partials/new.html',
					controller: 'newController'
				})
				.when('/show/:id', {
					templateUrl: 'partials/show.html',
					controller: 'showController'
				})
				.when('/edit/:id', {
					templateUrl: 'partials/edit.html',
					controller: 'editController'
				})
				.otherwise({
					redirectTo: '/'
				})
		})