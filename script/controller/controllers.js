
	

app.controller('videoCtrl', ["$scope", "$css", "videoService", function ($scope, $css, videoService) {
	//		$scope.data = 'video';
	videoService.getScope($scope);
	videoService.render($scope);

	//		videoService.load();
	$css.add('css/video.css');
	}]);

app.controller('fmCtrl', function ($scope, $css, $http, FmController) {
	FmController.getScope($scope);
	$http.get("data/live.json").success(function (res) {
		$scope.data = res
	});
	$http.get("data/column.json").success(function (res) {
		$scope.dataProMore = res
	});
	$css.add('css/fm.css');
	FmController.show();
	$scope.togMain = false;
	$scope.togProMore = true;
	$scope.togRadMore = true;
	$scope.proAlGoto1 = FmController.proAlGoto;
	$scope.proBack = FmController.proBack;
	$scope.proWriGoto = FmController.proWriGoto;

});
app.controller('mineCtrl', function ($scope, $css, mineService) {
	$scope.data = 'mine';
	$css.add('css/mine.css');
	$scope.FN1 = mineService.FN1;
	$scope.FN2 = mineService.FN2;
	$scope.FN3 = mineService.FN3;
	$scope.FN4 = mineService.FN4;
	$scope.FN5 = mineService.FN5;
	$scope.FN6 = mineService.FN6;
	$scope.FN7 = mineService.FN7;
	$scope.FN8 = mineService.FN8;
	$scope.FN9 = mineService.FN9;
	$scope.FN10 = mineService.FN10;
	$scope.FN11 = mineService.FN11;
	$scope.FN12 = mineService.FN12;
});