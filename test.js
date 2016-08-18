'use strict';

angular.module('myModule', []).config(['$httpProvider', function($httpProvider) {
	$httpProvider.useApplyAsync(true);
}]);

describe('myModule', function() {
	var $httpProvider;
	
	beforeEach(function() {
		module(function(_$httpProvider_) {
			$httpProvider = _$httpProvider_;
		});
		module('myModule');
	});
	
	it('configures the $http service to combine response processing via $applyAsync', function() {
		inject();
		expect($httpProvider.useApplyAsync()).toBeTruthy();
	});
});
