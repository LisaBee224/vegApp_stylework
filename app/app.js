var vegApp = angular.module('vegApp', ['ngRoute','firebase'])
.constant('FIREBASE_URL', 'https://vegapp.firebaseIO.com');
var appControllers = angular.module("itemListController," []);

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
	}])



