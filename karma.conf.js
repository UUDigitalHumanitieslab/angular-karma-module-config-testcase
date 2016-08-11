module.exports = function(config){
	config.set({

		basePath : '',

		files : [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'test.js'
		],
		
		autoWatch : true,

		frameworks: ['jasmine'],

		browsers : [
			'Chrome',
			'Firefox'
		],

		plugins : [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine'
		],

	});
};
