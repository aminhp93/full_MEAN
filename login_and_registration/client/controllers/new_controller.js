app.controller('newController', function($scope, userFactory, $location, $routeParams){		
	function index(data){
		$scope.users = data
		
		if (!$scope.users.errors){
			$scope.user = {};
			$location.url('/');
		}
	}
	$scope.create = function(){
		userFactory.create($scope.user, index);	
	}
	$scope.login = function(){
		userFactory.login($scope.user, index);
	}
})
