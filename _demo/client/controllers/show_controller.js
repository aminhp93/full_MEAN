app.controller('showController', function($scope, userFactory, $location, $routeParams){
			function index(data){
				$scope.user = data;
			}
			userFactory.show($routeParams.id, index);

			$scope.back = function(){
				$location.url('/');
			}
		})