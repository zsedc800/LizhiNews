//videoService----视频页面的factory

app.factory('videoService', function ($timeout, $http) {

	var factory = {};
	var thisScope = {};
	//TouchSlide初始化

	//	var fn = function(){
	//		TouchSlide({
	//			slideCell: "#leftTabBox",
	//			effect: "leftLoop"
	//		});
	//		
	//	}
	//	factory.load = function(scope){
	//		$timeout( fn, 0, false );
	//	}

	factory.getScope = function (scope) {
		thisScope = scope;
		console.log(thisScope)
	}


	//获得数据
	factory.render = function (scope) {
		$http.get("data/video.json").success(function (res) {
			scope.videoJsonData = res;
			//			scope.$apply();
			//			console.log(res);
		});


	}

	var test = function () {
			$(".hd").on("click", function (e) {
				//			$(e.target).css({
				//				color:"red"
				//			})
				$(e.target).parent().find("li").removeClass("isRedColor");
				$(e.target).addClass("isRedColor");
				$(".bd>div").hide();
				var index = $(e.target).index();
				var obj = $(".bd>div")[index];
				$(obj).show();
			});
		}
		//切换tab
	test();

	//显示new列表
	$(".jstv").on("click", function (e) {
		//		var obj = $(this).children();
		var className = $(e.target).parent("a").attr("ng-class")
			//		console.log(className);
		$(".newsListWrap").show();
		$("html").css({
			backgroundColor: "#FFF"
		})
		switch (className) {
		case "jsxsk":
			$http.get("data/video_jsxsk.json").success(function (res) {
				thisScope.videoNewsListData = res;
			});
			break;
		case "xwy":
			$http.get("data/video_xwy.json").success(function (res) {
				thisScope.videoNewsListData = res;
			});
			break;
		case "wjxw":
			$http.get("data/video_wjxw.json").success(function (res) {
				thisScope.videoNewsListData = res;
			});
			break;
		default:
			break;
		}
	});
	$(".arrowLeft").on("click", function () {
		$(".newsListWrap").hide();
	});


	return factory;


})


app.factory("FmController", function () {
	var factory = {};


	var text1 = {};

	var fmRadioMore = document.getElementsByClassName("fm_radio_more")[0];

	factory.show = function () {
		fmRadioMore.style.height = window.screen.height + "px";
	};

	factory.getScope = function (a) {
		text1 = a;
	}

	factory.proAlGoto = function () {
		//栏目推荐更多页面
		text1.togMain = true;
		text1.togProMore = false;
		text1.togRadMore = true;
	}

	factory.proWriGoto = function () {
		//直播电台更多页面

		text1.togMain = true;
		text1.togProMore = true;
		text1.togRadMore = false;
		fmRadioMore.style.height = window.screen.height + "px";
	}

	factory.proBack = function () {
		//点击返回按钮返回到fm主页面

		text1.togMain = false;
		text1.togProMore = true;
		text1.togRadMore = true;
	}

	return factory;
})

app.factory('swiper', function ($timeout) {
	function load(callback) {
		$timeout(script, 0, false);
	}

	function loadSync(callback) {

		var script = document.createElement('script'),
			firstscript = document.getElementsByTagName('script')[0];
		script.src = 'lib/idangerous.swiper2.7.6.js';
		script.onload = callback;
		firstscript.parentNode.insertBefore(script, firstscript);
	}
	return {
		load: load
	}
});

app.factory('swipe', function () {

	function bindEvent(ev, callback) {
		var calls = this._callbacks || (this._callbacks = {});
		(this._callbacks[ev] || (this._callbacks[ev] = [])).push(callback);
		return this;
	}

	function triggerEvent() {
		var args = Array.prototype.slice.call(arguments, 0);
		var ev = args.shift();
		var list, calls, i, len;
		if (!(calls = this._callbacks)) {
			return this;
		}
		if (!(list = this._callbacks[ev])) {
			return this;
		}
		for (i = 0, len = list.length; i < len; i++) {
			list[i].apply(this, args);
		}
		return this;
	}

	function extend(target, obj) {
		for (var i in obj) {
			target[i] = obj[i];
		}
	}

	return {
		bindEvent: bindEvent,
		triggerEvent: triggerEvent,
		extend: extend
	};

});



//mine页面的factory
app.factory("mineService", function () {
	var factory = {}

	//登录界面
	var login = document.getElementById("login");
	factory.FN1 = function () {
		login.style.display = "block";
	}
	factory.FN2 = function () {
		login.style.display = "none";
	}

	//天气界面
	var weather = document.getElementById("weather");
	factory.FN3 = function () {
		weather.style.display = "block";
	}
	factory.FN4 = function () {
		weather.style.display = "none";
	}

	//星座界面
	var constellation = document.getElementById("constellation");
	factory.FN5 = function () {
		constellation.style.display = "block";
	}
	factory.FN6 = function () {
		constellation.style.display = "none";
	}

	//反馈界面
	var feedback = document.getElementById("feedback");
	factory.FN7 = function () {
		feedback.style.display = "block";
	}
	factory.FN8 = function () {
		feedback.style.display = "none";
	}

	//关于我们界面
	var aboutUs = document.getElementById("aboutUs");
	factory.FN9 = function () {
		aboutUs.style.display = "block";
	}
	factory.FN10 = function () {
		aboutUs.style.display = "none";
	}

	//设置页面
	var setUp = document.getElementById("setUp");
	factory.FN11 = function () {
		setUp.style.display = "block";
	}
	factory.FN12 = function () {
		setUp.style.display = "none";
	}

	return factory;
})