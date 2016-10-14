app.controller('showController', function($scope, userFactory, $location, $routeParams){
			function index(data){
				$scope.users = data;
			}
			userFactory.show($routeParams.id, index);

			$scope.back = function(){
				$location.url('/');
			}
		})