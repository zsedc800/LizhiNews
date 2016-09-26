define([], function () {
	function controller($scope, $css, pageLoad) {

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
		//pageLoad.getPage('data/20.json', $scope);
		$scope.showPage = showPage;

	}
	return controller;
});