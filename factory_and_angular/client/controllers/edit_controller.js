app.controller('editController', function($scope, userFactory, $location, $routeParams){
			function index(data){
				$scope.user = data;
			}
			userFactory.show($routeParams.id, index);

			$scope.update = function(){
				userFactory.update($routeParams.id, $scope.new_user, index);
				$location.url('/');
			}
		})