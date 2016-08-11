'use strict';

angular.module('myModule', []).config(['$http', '$log', function($http, $log) {
	$http.get('/api/getkey').then(function success(response) {
		$log(response.data);
	});
}]);

describe('myModule', function() {
	it('logs a key obtained from XHR', inject(function($httpBackend) {
		$httpBackend.expectGET('/api/getkey').respond(200, '12345');
		angular.module('myModule');
		$httpBackend.flush();
	}));
});
