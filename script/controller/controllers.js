app.controller('homeCtrl', function ($scope) {
	$scope.data = 'home';
})

.controller('videoCtrl', function ($scope) {
		$scope.data = 'video';
	})
	.controller('fmCtrl', function ($scope) {
		$scope.data = 'fm';
	})
	.controller('mineCtrl', function ($scope) {
		$scope.data = 'mine';
	})
	.controller('findCtrl', function ($scope) {
		$scope.data = 'find';
	});