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
		$scope.data = {"Data":[{"Title":"FM101.1江苏交通广播网","Photo":"http://static.jstv.com/img/2016/8/4/2016841470301296984_19764.jpg","GlobalID":3400903,"Href4live":"http://live53.vojs.cn/4TaHTeL/800/live.m3u8","Href4replay":"http://218.94.59.190/Lf4B5jz/64/live.m3u8","EpgName":"开心方向盘","EpgID":9048,"Href":"http://news.jstv.com/wap/radio/20160729/1469760869957.shtml"},{"Title":"FM93.7江苏新闻广播","Photo":"http://static.jstv.com/img/2016/8/4/2016841470301387452_19764.jpg","GlobalID":3420637,"Href4live":"http://live53.vojs.cn/5Fo8mMX/800/live.m3u8","Href4replay":"http://218.94.59.190/3x8eA6T/64/live.m3u8","EpgName":"晓东有话说","EpgID":9244,"Href":"http://news.jstv.com/wap/radio/20160804/1470301788908.shtml"},{"Title":"FM99.7金陵之声","Photo":"http://static.jstv.com/img/2016/8/4/2016841470301863663_19764.jpg","GlobalID":3420641,"Href4live":"http://live53.vojs.cn/Hd2hIgM/800/live.m3u8","Href4replay":"http://218.94.59.190/ucQ8w60/64/live.m3u8","EpgName":"快乐下班路","EpgID":9390,"Href":"http://news.jstv.com/wap/radio/20160804/1470301866763.shtml"},{"Title":"FM97.5江苏经典流行音乐广播","Photo":"http://static.jstv.com/img/2016/8/4/2016841470301903227_19764.jpg","GlobalID":3420643,"Href4live":"http://live53.vojs.cn/2wtSfrS/800/live.m3u8","Href4replay":"http://218.94.59.190/WzTFvIR/64/live.m3u8","EpgName":"975环球音乐地图","EpgID":9472,"Href":"http://news.jstv.com/wap/radio/20160804/1470301935134.shtml"},{"Title":"FM89.7江苏音乐广播","Photo":"http://static.jstv.com/img/2016/8/4/2016841470301964241_19764.jpg","GlobalID":3420645,"Href4live":"http://live53.vojs.cn/jAmO6Ng/800/live.m3u8","Href4replay":"http://218.94.59.190/uaq6d1j/64/live.m3u8","EpgName":"娱乐报","EpgID":9553,"Href":"http://news.jstv.com/wap/radio/20160804/1470301993660.shtml"},{"Title":"AM1206江苏故事广播","Photo":"http://static.jstv.com/img/2016/8/4/2016841470302016977_19764.jpg","GlobalID":3420647,"Href4live":"http://live53.vojs.cn/rWjyus9/800/live.m3u8","Href4replay":"http://218.94.59.190/V6R3mfg/64/live.m3u8","EpgName":"海阳现场秀","EpgID":9700,"Href":"http://news.jstv.com/wap/radio/20160804/1470302045114.shtml"},{"Title":"FM91.4江苏文艺广播","Photo":"http://static.jstv.com/img/2016/8/4/2016841470302065479_19764.jpg","GlobalID":3420649,"Href4live":"http://live53.vojs.cn/pL6NkZo/800/live.m3u8","Href4replay":"http://218.94.59.190/zpn9Frd/64/live.m3u8","EpgName":"我们都爱秀","EpgID":9840,"Href":"http://news.jstv.com/wap/radio/20160804/147030210880.shtml"},{"Title":"FM100.5江苏健康广播","Photo":"http://static.jstv.com/img/2016/8/4/2016841470302206796_19764.jpg","GlobalID":3420663,"Href4live":"http://live53.vojs.cn/EWpb5Ov/800/live.m3u8","Href4replay":"http://218.94.59.190/k0JZ1KH/64/live.m3u8","EpgName":"名医坐堂","EpgID":9984,"Href":"http://news.jstv.com/wap/radio/20160804/1470302383509.shtml"},{"Title":"FM95.2江苏财经广播","Photo":"http://static.jstv.com/img/2016/8/4/2016841470302414930_19764.jpg","GlobalID":3420692,"Href4live":"http://live53.vojs.cn/caijing/800/live.m3u8","Href4replay":"http://218.94.59.190/iRG6145/64/live.m3u8","EpgName":"理财广场","EpgID":10137,"Href":"http://news.jstv.com/wap/radio/20160804/1470302459881.shtml"}],"ResultCode":0,"Message":"获取成功"};
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