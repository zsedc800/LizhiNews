define(['myApp', 'swiper', 'iscroller', 'TouchSilder'], function (app, swiper, iscroller, TouchSilder) {
	// app.service('pageLoad', ['$http', function ($http) {
	// 	function load() {
	// 		console.log('xxx');
	// 	}
	// 	this.load = load;
	// }]);
	// app.factory('randServer',function(){
	// 	var rand = {};

	// 	rand.randFn = function(){
	// 		var randWidth = parseFloat(Math.random()*(97.4-28)+28);
	// 		var randHeight = parseFloat(Math.random()*(8.3-2.5)+2.5);
	// 		console.log(randWidth,randHeight);
	// 		var w = parseFloat(randWidth + '%');console.log(w);console.log(typeof w);
	// 		document.getElementsByClassName('zhuanti-content2').style.width = w;
	// 		document.getElementsByClassName('zhuanti-content3').style.width = parseFloat(97.4-randWidth + '%');
	// 	}



	// 	return rand;
	// })

	//videoService----视频页面的factory
	app.factory('videoService', function ($timeout) {
		var factory = {};
		//TouchSlide初始化
		var fn = function () {
			TouchSlide({
				slideCell: "#leftTabBox",
				effect: "leftLoop"
			});
		}
		factory.load = function () {
			$timeout(fn, 0, false);
		}
		return factory;
	});


	app.factory("FmController", function () {
		var factory = {};

		var programaMore = document.getElementsByClassName("fm_programa_more")[0];
		var fmRadioMore = document.getElementsByClassName("fm_radio_more")[0];
		var fmMain = document.getElementsByClassName("fm_main")[0];
		var tabBar = document.getElementsByClassName("tabBar")[0];

		factory.show = function () {
			fmRadioMore.style.height = window.screen.height + "px";
		};

		factory.proAlGoto = function () {
			//栏目推荐更多页面
			fmMain.style.display = "none";
			programaMore.style.display = "block";
			tabBar.style.display = "none";
			fmRadioMore.style.display = "none";
		}

		factory.proWriGoto = function () {
			//直播电台更多页面
			fmMain.style.display = "none";
			fmRadioMore.style.display = "block";
			tabBar.style.display = "none";
			programaMore.style.display = "none";
		}

		factory.proBack = function () {
			//点击返回按钮返回到fm主页面
			fmMain.style.display = "block";
			programaMore.style.display = "none";
			tabBar.style.display = "block";
			fmRadioMore.style.display = "none";
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
				console.log(width);
				$(this).animate({
					left: $(this).position().left - 4 * width
				});
			});
			touchOn(homeTitle, 'touchRight', function () {
				if ($(this).position().left === 0) {
					return;
				}

				var width = $(this).find('.title-item').width();
				console.log(width);
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

});