app.controller('homeCtrl', function ($scope, $css) {
	$scope.data = 'home';
	$css.add('css/home.css');
})

.controller('videoCtrl', function ($scope, $css,videoService) {
		$scope.data = 'video';
		$css.add('css/video.css');
		videoService.fn();
	})
	.controller('fmCtrl', function ($scope, $css) {
		$scope.data = 'fm';
		$css.add('css/fm.css');
	})
	.controller('mineCtrl', function ($scope, $css) {
		$scope.data = 'mine';
		$css.add('css/mine.css');
	})
	.controller('findCtrl', function ($scope, $css) {
		$scope.data = 'find';
		$css.add('css/find.css')
	});