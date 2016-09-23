
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
app.factory('videoService',function($timeout){
	var factory = {};
	//TouchSlide初始化
	fn = function(){
		TouchSlide({
			slideCell: "#leftTabBox",
			effect: "leftLoop"
		});
	}
	factory.load = function(){
		$timeout( fn, 0, false );
	}
	return factory;
})


app.factory("FmController",function(){
	var factory = {};
	
	var programaMore = document.getElementsByClassName("fm_programa_more")[0];
	var fmRadioMore = document.getElementsByClassName("fm_radio_more")[0];
	var fmMain = document.getElementsByClassName("fm_main")[0];
	var tabBar = document.getElementsByClassName("tabBar")[0];
	
	factory.show = function(){
		fmRadioMore.style.height = window.screen.height + "px";
	};
	
	factory.proAlGoto = function(){
		//栏目推荐更多页面
		fmMain.style.display = "none";
		programaMore.style.display = "block";
		tabBar.style.display = "none";
		fmRadioMore.style.display = "none";
	}
	
	factory.proWriGoto = function(){
		//直播电台更多页面
		fmMain.style.display = "none";
		fmRadioMore.style.display = "block";
		tabBar.style.display = "none";	
		programaMore.style.display = "none";
	}
	
	factory.proBack = function(){
		//点击返回按钮返回到fm主页面
		fmMain.style.display = "block";
		programaMore.style.display = "none";
		tabBar.style.display = "block";	
		fmRadioMore.style.display = "none";
	}
	
	return factory;
})

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
	}

	return {
		getPage: getPage,

	};
}]);


app.service('pageLoad1', ['$http', function ($http) {
	function getData(url, scope) {
		$http.get(url).success(function (res) {
			console.log(res);
			scope.page1 = res;
		});
	}

	this.getData = getData;
}]);
