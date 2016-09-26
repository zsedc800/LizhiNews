define(['myApp', './script/controller/controller.js'], function (app) {

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeCtrl'
					/*resolve: {
						homedeps: function ($q) {
							console.log(app);
							var deferred = $q.defer();
							require(['script/controller/homeCtrl.js'], function (controller) {
								console.log(controller);
								app.controller('homeCtrl', controller);
								//$controllerProvider.register('homeCtrl', constroller);
								deferred.resolve();
							});
							return deferred.promise;
						}
					}*/
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
});