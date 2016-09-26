define([], function () {
	function controller($scope, $css) {
		$scope.data = 'find';
		$css.add('css/find.css');
	}
	return controller;
});