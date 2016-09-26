app.
controller('homeCtrl', ['$scope', '$css', 'pageLoad', function ($scope, $css, pageLoad) {

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

}])
	.controller('videoCtrl', function ($scope, $css, videoService) {
		videoService.load();
		$css.add('css/video.css');
		$scope.test = videoService.test;

	})

.controller('fmCtrl', function ($scope, $css, $http, FmController) {
		//		$http.get("http://api.litchi.jstv.com:800/audio/live").success(function(res){$scope.data = res});
		$scope.data = {
			"Data": [{
				"Title": "FM101.1江苏交通广播网",
				"Photo": "http://static.jstv.com/img/2016/8/4/2016841470301296984_19764.jpg",
				"GlobalID": 3400903,
				"Href4live": "http://live53.vojs.cn/4TaHTeL/800/live.m3u8",
				"Href4replay": "http://218.94.59.190/Lf4B5jz/64/live.m3u8",
				"EpgName": "开心方向盘",
				"EpgID": 9048,
				"Href": "http://news.jstv.com/wap/radio/20160729/1469760869957.shtml"
			}, {
				"Title": "FM93.7江苏新闻广播",
				"Photo": "http://static.jstv.com/img/2016/8/4/2016841470301387452_19764.jpg",
				"GlobalID": 3420637,
				"Href4live": "http://live53.vojs.cn/5Fo8mMX/800/live.m3u8",
				"Href4replay": "http://218.94.59.190/3x8eA6T/64/live.m3u8",
				"EpgName": "晓东有话说",
				"EpgID": 9244,
				"Href": "http://news.jstv.com/wap/radio/20160804/1470301788908.shtml"
			}, {
				"Title": "FM99.7金陵之声",
				"Photo": "http://static.jstv.com/img/2016/8/4/2016841470301863663_19764.jpg",
				"GlobalID": 3420641,
				"Href4live": "http://live53.vojs.cn/Hd2hIgM/800/live.m3u8",
				"Href4replay": "http://218.94.59.190/ucQ8w60/64/live.m3u8",
				"EpgName": "快乐下班路",
				"EpgID": 9390,
				"Href": "http://news.jstv.com/wap/radio/20160804/1470301866763.shtml"
			}, {
				"Title": "FM97.5江苏经典流行音乐广播",
				"Photo": "http://static.jstv.com/img/2016/8/4/2016841470301903227_19764.jpg",
				"GlobalID": 3420643,
				"Href4live": "http://live53.vojs.cn/2wtSfrS/800/live.m3u8",
				"Href4replay": "http://218.94.59.190/WzTFvIR/64/live.m3u8",
				"EpgName": "975环球音乐地图",
				"EpgID": 9472,
				"Href": "http://news.jstv.com/wap/radio/20160804/1470301935134.shtml"
			}, {
				"Title": "FM89.7江苏音乐广播",
				"Photo": "http://static.jstv.com/img/2016/8/4/2016841470301964241_19764.jpg",
				"GlobalID": 3420645,
				"Href4live": "http://live53.vojs.cn/jAmO6Ng/800/live.m3u8",
				"Href4replay": "http://218.94.59.190/uaq6d1j/64/live.m3u8",
				"EpgName": "娱乐报",
				"EpgID": 9553,
				"Href": "http://news.jstv.com/wap/radio/20160804/1470301993660.shtml"
			}, {
				"Title": "AM1206江苏故事广播",
				"Photo": "http://static.jstv.com/img/2016/8/4/2016841470302016977_19764.jpg",
				"GlobalID": 3420647,
				"Href4live": "http://live53.vojs.cn/rWjyus9/800/live.m3u8",
				"Href4replay": "http://218.94.59.190/V6R3mfg/64/live.m3u8",
				"EpgName": "海阳现场秀",
				"EpgID": 9700,
				"Href": "http://news.jstv.com/wap/radio/20160804/1470302045114.shtml"
			}, {
				"Title": "FM91.4江苏文艺广播",
				"Photo": "http://static.jstv.com/img/2016/8/4/2016841470302065479_19764.jpg",
				"GlobalID": 3420649,
				"Href4live": "http://live53.vojs.cn/pL6NkZo/800/live.m3u8",
				"Href4replay": "http://218.94.59.190/zpn9Frd/64/live.m3u8",
				"EpgName": "我们都爱秀",
				"EpgID": 9840,
				"Href": "http://news.jstv.com/wap/radio/20160804/147030210880.shtml"
			}, {
				"Title": "FM100.5江苏健康广播",
				"Photo": "http://static.jstv.com/img/2016/8/4/2016841470302206796_19764.jpg",
				"GlobalID": 3420663,
				"Href4live": "http://live53.vojs.cn/EWpb5Ov/800/live.m3u8",
				"Href4replay": "http://218.94.59.190/k0JZ1KH/64/live.m3u8",
				"EpgName": "名医坐堂",
				"EpgID": 9984,
				"Href": "http://news.jstv.com/wap/radio/20160804/1470302383509.shtml"
			}, {
				"Title": "FM95.2江苏财经广播",
				"Photo": "http://static.jstv.com/img/2016/8/4/2016841470302414930_19764.jpg",
				"GlobalID": 3420692,
				"Href4live": "http://live53.vojs.cn/caijing/800/live.m3u8",
				"Href4replay": "http://218.94.59.190/iRG6145/64/live.m3u8",
				"EpgName": "理财广场",
				"EpgID": 10137,
				"Href": "http://news.jstv.com/wap/radio/20160804/1470302459881.shtml"
			}],
			"ResultCode": 0,
			"Message": "获取成功"
		};
		$scope.dataProMore = {
			"Data": [{
				"Title": "交广晚班车",
				"GlobalID": 3417474,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216446903_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216462688.shtml"
			}, {
				"Title": "城市乐游",
				"GlobalID": 3417451,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216141969_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216171468.shtml"
			}, {
				"Title": "滴滴叭叭早上好",
				"GlobalID": 3417456,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216190859_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216211486.shtml"
			}, {
				"Title": "法治在线",
				"GlobalID": 3417459,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216225975_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216236747.shtml"
			}, {
				"Title": " 飞一般音乐",
				"GlobalID": 3417461,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216254917_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/147021627476.shtml"
			}, {
				"Title": "即时资讯",
				"GlobalID": 3417465,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216289982_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216306527.shtml"
			}, {
				"Title": "健康总动员",
				"GlobalID": 3417467,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216322295_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216336721.shtml"
			}, {
				"Title": "江苏新闻联播",
				"GlobalID": 3417469,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216377751_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216390258.shtml"
			}, {
				"Title": "交广早班车",
				"GlobalID": 3417482,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216473001_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216656650.shtml"
			}, {
				"Title": "蓝色音乐田",
				"GlobalID": 3417487,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216669110_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216685915.shtml"
			}, {
				"Title": "名医坐堂",
				"GlobalID": 3417489,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216696859_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/147021676384.shtml"
			}, {
				"Title": "男生宿舍",
				"GlobalID": 3417491,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216778423_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216790968.shtml"
			}, {
				"Title": "天下体坛",
				"GlobalID": 3417493,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216827779_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216840130.shtml"
			}, {
				"Title": "新闻故事",
				"GlobalID": 3417497,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216854016_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216868966.shtml"
			}, {
				"Title": "新闻评弹",
				"GlobalID": 3417503,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216891170_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216906432.shtml"
			}, {
				"Title": "新闻晚高峰",
				"GlobalID": 3417507,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216919674_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216969150.shtml"
			}, {
				"Title": "新闻早高峰",
				"GlobalID": 3417511,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470216987282_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470216995741.shtml"
			}, {
				"Title": "阳光倾城",
				"GlobalID": 3417515,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470217009277_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470217039625.shtml"
			}, {
				"Title": "音乐fun不停",
				"GlobalID": 3417518,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470217053402_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470217068530.shtml"
			}, {
				"Title": "政风热线",
				"GlobalID": 3417531,
				"Summary": "",
				"Photo": "http://static.jstv.com/img/2016/8/3/2016831470217090740_19766.jpg",
				"Href": "http://news.jstv.com/wap/radiopro/20160803/1470217144685.shtml"
			}],
			"ResultCode": 0,
			"Message": "获取成功"
		};
		$css.add('css/fm.css');
		FmController.show();
		$scope.proAlGoto1 = FmController.proAlGoto;
		$scope.proBack = FmController.proBack;
		$scope.proWriGoto = FmController.proWriGoto;
	})
	.controller('mineCtrl', function ($scope, $css) {
		$scope.data = 'mine';
		$css.add('css/mine.css');
	})
	.controller('findCtrl', function ($scope, $css) {
		$scope.data = 'find';
		$css.add('css/find.css');
	});