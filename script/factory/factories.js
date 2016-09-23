app.factory("FmController",function(){
	var factory = {};
	
	factory.show = function(){
		//栏目推荐更多项
		var programaMore = document.getElementsByClassName("fm_programa_more")[0];
//		programaMore.style.height = document.body.clientHeight + "px";
		var fmMain = document.getElementsByClassName("fm_main")[0];
		var programaMore = document.getElementsByClassName("fm_programa_more")[0];
//		var programaGoto = document.getElementsByClassName("fm_programa_goto")[0];
		var fmRadioMore = document.getElementsByClassName("fm_radio_more")[0];
		fmRadioMore.style.height = window.screen.height + "px";
		
	};
	
	factory.proAlGoto = function(){
		alert("123");
	}
	
	return factory;
})