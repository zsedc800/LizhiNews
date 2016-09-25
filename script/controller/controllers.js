
app.controller('homeCtrl', ['$scope', '$css', 'pageLoad', function ($scope, $css, pageLoad) {
	function showPage(x) {
		var arr = JSON.parse(localStorage.getItem("titleList")),
			obj = {};
		for (var i = 0, len = arr.length; i < len; i++) {
			obj[arr[i]] = i + 1;
		}
		pageLoad.getPage('data/' + obj[x] + '.json', $scope);
	}
	if (!($scope.titleList = JSON.parse(localStorage.getItem("titleList")))) {
		$scope.titleList = ['头条', '在现场', '江苏卫视', '荔枝锐评',
		'原创', '图集', '娱乐', '专题', '荔枝派', '社会', '财经', '体育', '汽车', '科技', '房产',
		'军事', '监督', '真相帝', '江苏', '国际', '国内'];
		localStorage.setItem("titleList", JSON.stringify($scope.titleList));
	}
	var index = 1;
	$css.add('css/home.css');
	pageLoad.getPage('data/20.json', $scope);
	$scope.showPage = showPage;
	
}])
.controller('videoCtrl', ["$scope","$css","videoService",function ($scope, $css,videoService) {
//		$scope.data = 'video';
		videoService.render($scope);
//		videoService.load();
		$css.add('css/video.css');
	}])

	.controller('fmCtrl', function ($scope, $css, $http, FmController) {
		FmController.getScope($scope);
		$http.get("data/live.json").success(function(res){$scope.data = res});
		$http.get("data/column.json").success(function(res){$scope.dataProMore = res});
		$css.add('css/fm.css');
		FmController.show();
		$scope.togMain = false;
		$scope.togProMore = true;
		$scope.togRadMore = true;
		$scope.proAlGoto1 = FmController.proAlGoto;
		$scope.proBack = FmController.proBack;
		$scope.proWriGoto = FmController.proWriGoto;
		
	})
	.controller('mineCtrl', function ($scope, $css,mineService) {
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
	})
	.controller('findCtrl', function ($scope, $css) {
		$scope.data = 'find';
		$css.add('css/find.css');
	});