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
	factory.test = function(){
		console.log(angular.element);
	}
	
	
	return factory;
	
	
})

