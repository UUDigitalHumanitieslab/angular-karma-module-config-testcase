'use strict';

angular.module('myModule', []).run(['$http', '$log', function($http, $log) {
	$http.get('/api/getkey').then(function success(response) {
		$log.log(response.data);
	});
}]);

describe('myModule', function() {
	beforeEach(module('myModule'));

	it('logs a key obtained from XHR', inject(function($httpBackend) {
		$httpBackend.expectGET('/api/getkey').respond(200, '12345');
		$httpBackend.flush();
	}));
});
