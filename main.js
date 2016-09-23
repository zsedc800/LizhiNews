/*require.config({
	baseUrl: './',
	paths: {
		"angular": "lib/angular",
		"angularAMD": "lib/angularAMD",
		"angular-route": "lib/angular-route",
		"angularCSS": "lib/angular-css.min",
	},
	shim: {
		"angular": {
			exports: "angular"
		},
		"angular-route": ['angular'],
		"angularAMD": ['angular'],
		"angularCSS": ['angular']
			//"ngload": ['angularAMD']
	},
	deps: ['app']
});*/


// require 的配置文件 
require.config({
	// 引入核心文件
	paths: {
		"angular": "./lib/angular.min",
		"angular-route": "./lib/angular-route",
		"angularAMD": "./lib/angularAMD",
		"angular-css": "./lib/angular-css.min"
	},
	// 定义非AMD规范JS
	shim: {
		"angular-route": ["angular"],
		"angularAMD": ["angular"],
		"angular-css": ["angular"]
	},
	// 当所有依赖文件加载完毕之后，启动app.js文件
	deps: ["app"]
});