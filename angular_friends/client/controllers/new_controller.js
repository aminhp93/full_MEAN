app.controller('newController', function($scope, userFactory, $location, $routeParams){		
	function index(data){
		$scope.users = data
		console.log($scope.users);
	}

	$scope.create = function(){
		userFactory.create($scope.user, index);
		$scope.user = {};
		$location.url('/');
	}
})
