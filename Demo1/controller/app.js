'use strict'
var module = angular.module('myApp', ["ngRoute"]);

module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
				when('/', {
					templateUrl: 'templates/file1.html'
				}).
				when('/home2', {
					templateUrl: 'templates/file2.html'
				}).
				when('/home3', {
					templateUrl: 'templates/file3.html'
				}).
				otherwise({
					redirectTo: '/'
				});
	}]);