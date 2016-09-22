app.factory('videoService',function(){
	var factory = {};
	factory.fn = function(){
		TouchSlide({
			slideCell: "#leftTabBox",
			effect: "leftLoop"
		});
	}
	
	return factory;
})

