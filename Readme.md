This is a reduced testcase for an open question: how to test the `config` function of an `angular.module`?

To try the attempt in the testcase:

    npm test

You will get:

    Error: [$injector:unpr] Unknown provider: $httpProviderProvider <- $httpProvider
    ...
    @/path/to/testcase/test.js:8:84
    @/path/to/testcase/test.js:7:1

If you find the solution, please make a fork and publish your solution in a pull request. Thanks in advance.
