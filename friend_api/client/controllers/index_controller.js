app.controller('indexController', function($scope, userFactory, $location){
			function index(data){
				$scope.users = data
			}
			userFactory.index(index);

			$scope.new = function(){
				$location.url('/new');
			}

			$scope.show = function(id){
				$location.url('/show/' + id);
			}

			$scope.edit = function(id){
				$location.url('/edit/' + id);
			}

			$scope.delete = function(id){
				userFactory.delete(id, index);
			}

		})