app.controller('newController', function($scope, userFactory, $location, $routeParams){
		
			$scope.create = function(){
				userFactory.create($scope.user);
				$scope.user = {};
				$location.url('/');
			}
		})
