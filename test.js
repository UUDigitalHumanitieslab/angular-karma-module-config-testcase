'use strict';

angular.module('myModule', []).config(['$httpProvider', function($httpProvider) {
	$httpProvider.useApplyAsync(true);
}]);

describe('myModule', function() {
	it('configures the $http service to combine response processing via $applyAsync', inject(function($httpProvider) {
		expect($httpProvider.useApplyAsync()).toBeTruthy();
	}));
});
