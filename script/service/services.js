define(['myApp', 'swiper', 'iscroller', 'TouchSilder'], function (app, swiper, iscroller, TouchSilder) {


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
	});



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


	app.factory('pageLoad', ['$http', function ($http) {
		function getPage(url, scope) {
			$http.get(url).success(function (res) {
				setPageData(res, scope);
			});
		}

		function setPageData(res, scope) {
			var list = res.Data.List,
				i = 0,
				len = list.length;
			for (i = 0; i < len; i++) {
				if (list[i].ArticleType === 16) {
					list[i].myType = 6;
					list[i].Data.Class = 'realWorld';
				}
				switch (list[i].Data.MyType) {
				case '小图+标题+描述':
					{
						list[i].Data.Class = 'sm-pic-desc';
						list[i].myType = 1;
						break;
					}
				case '小图':
					{
						list[i].Data.Class = 'sm-pic-desc';
						list[i].myType = 2;
						break;
					}
				case '大图':
					{
						list[i].Data.Class = 'big-imgDiv';
						list[i].myType = 3;
						break;
					}
				case '1大2小3张图':
					{
						list[i].Data.Class = 'three-imgDiv';
						list[i].myType = 4;
						break;
					}
				case '1张大图':
					{
						list[i].Data.Class = 'one-imgDiv';
						list[i].myType = 5;
						break;
					}
				default:
					break;
				}
				if (list[i].Data.HaveVideo === "有视频") {
					list[i].Data.HaveVideo = true;
				} else {
					list[i].Data.HaveVideo = false;
				}
			}
			res.Data.List = list;
			scope.page1 = res;

			//$('#tapContainer').trigger('pageLoaded');
			var tapContainer = document.getElementById('tapContainer');
			touchOn(tapContainer, 'touchLeft', function () {
				var width = $(this).find('.pageview').width();
				if ($(this).position().left === -$(this).width()) {
					return;
				}
				$(this).animate({
					left: $(this).position().left - width
				}, function () {
					var index = Math.abs(parseInt($(this).position().left / width)) + 1;
					getPage('data/' + index + '.json', scope);
				});

			});
			touchOn(tapContainer, 'touchRight', function () {
				var width = $(this).find('.pageview').width();
				if ($(this).position().left === 0) {
					return;
				}
				$(this).animate({
					left: $(this).position().left + width
				}, function () {
					var index = Math.abs(parseInt($(this).position().left / width)) + 1;
					getPage('data/' + index + '.json', scope);
				});
			});
			var homeTitle = document.getElementById('homeTitle');
			touchOn(homeTitle, 'touchLeft', function () {
				if ($(this).position().left === -$(this).width()) {
					return;
				}
				var width = $(this).find('.title-item').width();
				$(this).animate({
					left: $(this).position().left - 4 * width
				});
			});
			touchOn(homeTitle, 'touchRight', function () {
				if ($(this).position().left === 0) {
					return;
				}

				var width = $(this).find('.title-item').width();
				$(this).animate({
					left: $(this).position().left + 4 * width
				});
			});
			/*var myScroller = new iscroller(homeTitle,{
				probeType : 2,

			});*/
		}


		var hasElem = {};

		function touchOn(elem, event, callback) {
			if (hasElem !== elem) {
				hasElem = elem;
				elem.addEventListener('touchstart', function (e) {
					var startPos = e.targetTouches[0].clientX,
						flagleft = true,
						flagright = true;


					this.addEventListener('touchmove', function (ev) {
						var curPos = ev.targetTouches[0].clientX;
						$(this).on('touchend', function () {
							var dist = curPos - startPos;
							if (dist > 40 && flagright) {
								flagright = false;
								$(this).trigger('touchRight');
							}
							if (dist < -40 && flagleft) {
								flagleft = false;
								$(this).trigger('touchLeft');
							}
						});

					});
				});
			}
			$(elem).on(event, callback);
		}
		return {
			getPage: getPage
		};
	}]);

	app.factory('findService', function ($http) {
		var thisScope = {};
		var factory = {}
			//	var toggleList = ['toggle1','toggle2','toggle3','toggle4'];
		factory.getScope = function (scope) {
			thisScope = scope;
		}

		factory.toggle1 = function () {
			thisScope.activePackIsShow1 = true;
		}
		factory.toggle2 = function () {
			thisScope.activePackIsShow2 = true;
		}
		factory.toggle3 = function () {
			thisScope.activePackIsShow3 = true;
		}
		factory.toggle4 = function () {
			thisScope.activePackIsShow4 = true;
		}


		$http.get("data/keji.json").success(
			function (data) {
				thisScope.findJsonData = data
				console.log(thisScope);
			}
		).error(function () {
			alert('error');
		});

		$http.get("data/factory.json").success(
			function (data2) {
				thisScope.findJsonData2 = data2
				console.log(thisScope);
			}
		).error(function () {
			alert('error');
		});

		//	console.log(thisScope);
		return factory;
	});


});