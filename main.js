/*require.config({
	baseUrl: './',
	paths: {
		"jquery": "lib/jquery-1.12.3",
		"swiper": "lib/idangerous.swiper2.7.6",
		"TouchSilder": "lib/TouchSlide.1.1.js",
		"angular": "lib/angular.min",

		//"angularAMD": "lib/angularAMD",
		"angular-route": "lib/angular-route",
		"angularCSS": "lib/angular-css.min",
		"route": "route",
		"myApp": "myApp"
	},
	shim: {
		"angular": {
			exports: "angular"
		},
		"angular-route": {
			deps: ['angular'],
			exports: 'angular-route'
		},
		"angularCSS": {
			deps: ['angular', 'angular-route'],
			exports: 'angularCSS'
		}
	}
});*/

require.config({
	baseUrl: './',
	paths: {
		'jquery': 'lib/jquery-1.12.3',
		'angular': 'lib/angular.min',
		'angular-route': 'lib/angular-route',
		'myApp': 'myApp',
		"swiper": "lib/idangerous.swiper2.7.6",
		'route': 'route',
		"TouchSilder": "lib/TouchSlide.1.1",
		'services': 'script/service/services',
		'angularCSS': 'lib/angular-css.min',
		'iscroller': 'lib/iscroll-probe'

	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			deps: ['angular'],
			exports: 'angular-route'
		},
		'angularCSS': {
			deps: ['angular', 'angular-route'],
			exports: 'angularCSS'
		},
		'TouchSilder': {
			exports: 'TouchSilder'
		}
	}
});
document.documentElement.style.fontSize = document.body.clientWidth / 10 + 'px';
window.onresize = function () {
	document.documentElement.style.fontSize = document.body.clientWidth / 10 + 'px';
}
require(['jquery', 'angular', 'iscroller', 'route'], function ($, angular, iscroller) {
	angular.bootstrap(document, ["myApp"]);

});