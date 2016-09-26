define([], function () {
	function controller($scope, $css) {
		$scope.data = 'mine';
		$css.add('css/mine.css');
	}
	return controller;
});