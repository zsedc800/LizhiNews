
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
app.factory('videoService',function($timeout,$http){
	var factory = {};
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
	
	//获得数据
	factory.render = function(scope){
		$http.get("data/video.json").success(function(res){
			scope.videoJsonData = res;
//			scope.$apply();
//			console.log(res);
		});
		
	}
	
	var test = function(){
		$(".hd").on("click",function(e){
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
	
	test();

	return factory;
	
	
})


app.factory("FmController",function(){
	var factory = {};
	
	var text1 = {};
	
	var fmRadioMore = document.getElementsByClassName("fm_radio_more")[0];
	
	factory.show = function(){
		fmRadioMore.style.height = window.screen.height + "px";
	};
	
	factory.getScope = function(a){
		text1 = a;
	}
	
	factory.proAlGoto = function(){
		//栏目推荐更多页面
		text1.togMain = true;
		text1.togProMore = false;
		text1.togRadMore = true;
	}
	
	factory.proWriGoto = function(){
		//直播电台更多页面
		text1.togMain = true;
		text1.togProMore = true;
		text1.togRadMore = false;
		fmRadioMore.style.height = window.screen.height + "px";
	}
	
	factory.proBack = function(){
		//点击返回按钮返回到fm主页面
		text1.togMain = false;
		text1.togProMore = true;
		text1.togRadMore = true;
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
//			console.log(res);
			scope.page1 = res;
		});
	}

	this.getData = getData;
}]);


//mine页面的factory
app.factory("mineService",function(){
	var factory = {}
	
	//登录界面
	var login = document.getElementById("login");
	factory.FN1 = function(){		
			login.style.display ="block" ;		
	}
	factory.FN2 = function(){
			login.style.display ="none" ;	
	}
	
	//天气界面
	var weather = document.getElementById("weather");
	factory.FN3 = function(){		
			weather.style.display ="block" ;		
	}
	factory.FN4 = function(){
			weather.style.display ="none" ;	
	}
	
	//星座界面
	var constellation = document.getElementById("constellation");
	factory.FN5 = function(){		
			constellation.style.display ="block" ;		
	}
	factory.FN6 = function(){
			constellation.style.display ="none" ;	
	}
	
	//反馈界面
	var feedback = document.getElementById("feedback");
	factory.FN7 = function(){		
			feedback.style.display ="block" ;		
	}
	factory.FN8 = function(){
			feedback.style.display ="none" ;	
	}
	
	//关于我们界面
	var aboutUs = document.getElementById("aboutUs");
	factory.FN9 = function(){		
			aboutUs.style.display ="block" ;		
	}
	factory.FN10 = function(){
			aboutUs.style.display ="none" ;	
	}
	
	//设置页面
	var setUp = document.getElementById("setUp");
	factory.FN11 = function(){		
			setUp.style.display ="block" ;		
	}
	factory.FN12 = function(){
			setUp.style.display ="none" ;	
	}
	
	return factory;
})