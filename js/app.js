var takePillApp = angular.module('takePillApp', ['ngRoute', 'ui.bootstrap']);
takePillApp.config(function($routeProvider) {
	$routeProvider
		.when('/',
			{
				templateUrl: 'pages/main.html'
			})
		.when('/page2', {
			controller: 'Settings',
			templateUrl: 'pages/settings.html'
		}).
		otherwise({ redirectTo: 'pages/main.html'});
});