<<<<<<< HEAD
var vegApp = angular.module('vegApp', ['ngRoute','firebase'])
.constant('FIREBASE_URL', 'https://vegapp.firebaseIO.com');
var appControllers = angular.module("itemListController," []);
=======
var vegApp = angular.module('vegApp', ['ngRoute']);

>>>>>>> cc9896fedbdfc40058bc50b6842c0794526dd8d4

vegApp.config(['$routeProvider', function($routeProvider){

		$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'itemListController'
		})
		.when('/home', {
			templateUrl: 'partials/main.html',
			controller: 'itemListController'
		})
		
		.when('/login', {
			templateUrl: 'partials/login.html'/*,
			controller: 'registration'*/
		})
		.when('/register', {
			templateUrl: 'partials/registration.html'/*,
			controller: 'registration'*/
		})
		.when('/moreinfo', {
			templateUrl: 'partials/moreinfo.html',
			controller: 'moreinfo'
		})
		.when('/recipes', {
			templateUrl: 'partials/recipes.html',
			controller: 'recipes'
		})
		.otherwise({
			redirectTo: '/login'
		});
<<<<<<< HEAD
	}])
=======
	}
]);
>>>>>>> cc9896fedbdfc40058bc50b6842c0794526dd8d4



