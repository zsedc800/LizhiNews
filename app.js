var app = angular.module('myLizhiNews', ['ngRoute', 'angularCSS'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeCtrl'
			})
			.when('/video', {
				templateUrl: 'views/video.html',
				controller: 'videoCtrl'
			})
			.when('/fm', {
				templateUrl: 'views/fm.html',
				controller: 'fmCtrl'
			})
			.when('/find', {
				templateUrl: 'views/find.html',
				controller: 'findCtrl'
			})
			.when('/mine', {
				templateUrl: 'views/mine.html',
				controller: 'mineCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
}]);