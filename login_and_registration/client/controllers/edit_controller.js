app.controller('editController', function($scope, userFactory, $location, $routeParams){
			function index(data){
				$scope.user = data;
			}
			userFactory.show($routeParams.id, index);

			$scope.update = function(){
				userFactory.update($routeParams.id, $scope.user, index);
				$location.url('/');
			}
		})