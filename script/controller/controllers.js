app.controller('homeCtrl', ['$scope', '$css', 'pageLoad', function ($scope, $css, pageLoad) {
	if (!($scope.titleList = JSON.parse(localStorage.getItem("titleList")))) {
		$scope.titleList = ['头条', '在现场', '江苏卫视', '荔枝锐评',
		'原创', '图集', '娱乐', '专题', '荔枝派', '社会', '财经', '体育', '汽车', '科技', '房产',
		'军事', '监督', '真相帝', '江苏', '国际', '国内'];
		localStorage.setItem("titleList", JSON.stringify($scope.titleList));
	}
	var index = 1;
	$css.add('css/home.css');
	pageLoad.getPage('data/2.json', $scope);

}])

.controller('videoCtrl', function ($scope, $css) {
		$scope.data = 'video';
		$css.add('css/video.css');
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