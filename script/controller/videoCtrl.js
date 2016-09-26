define([], function () {
	function controller($scope, $css, videoService) {
		videoService.load();
		$css.add('css/video.css');
		$scope.test = videoService.test;

	}
	return controller;
});