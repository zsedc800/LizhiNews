app.factory('randServer',function(){
	var rand = {};
	
	rand.randFn = function(){
		var randWidth = parseFloat(Math.random()*(97.4-28)+28);
		var randHeight = parseFloat(Math.random()*(8.3-2.5)+2.5);
		console.log(randWidth,randHeight);
		var w = parseFloat(randWidth + '%');console.log(w);console.log(typeof w);
		document.getElementsByClassName('zhuanti-content2').style.width = w;
		document.getElementsByClassName('zhuanti-content3').style.width = parseFloat(97.4-randWidth + '%');
	}
	
	
	
	return rand;
})