<<<<<<< HEAD
vegApp.controller("registration", 
=======
graphApp.controller("registration", 
>>>>>>> cc9896fedbdfc40058bc50b6842c0794526dd8d4
	function($scope, 
		$location, 
		$firebaseAuth, 
		FIREBASE_URL,
		Authentication
		){

		$scope.login = function(){
			Authentication.login($scope.user)
			.then(function(user){
<<<<<<< HEAD
				$location.path("/home");
=======
				$location.path("/graph");
>>>>>>> cc9896fedbdfc40058bc50b6842c0794526dd8d4
			}).catch(function(error){
				$scope.message = error.message;
			}); // login
	} // end function

	$scope.register = function() {
		Authentication.register($scope.user)
		.then(function(user){
			Authentication.login($scope.user);
<<<<<<< HEAD
			$location.path("/home");
=======
			$location.path("/graph");
>>>>>>> cc9896fedbdfc40058bc50b6842c0794526dd8d4
		}).catch(function(error){
			$scope.message = error.message;
		});
		
	};// register

});  
