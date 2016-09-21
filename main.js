require.config({
	baseUrl: './',
	paths: {
		jquery: 'lib/jquery-1.12.3'
	}
});

require(['jquery', 'app.js', 'script/controller/controllers.js'], function () {

});