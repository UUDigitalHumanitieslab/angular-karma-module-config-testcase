This is a reduced testcase with a solution for the question: how to test the `config` function of an `angular.module`?

To try the testcase:

    npm test

On the previous commit, you would get:

    Error: [$injector:unpr] Unknown provider: $httpProviderProvider <- $httpProvider
    ...
    @/path/to/testcase/test.js:8:84
    @/path/to/testcase/test.js:7:1

The solution in this commit works by capturing configuration time objects through `angular.mock.module`. This function can accept an anonymous module configuration block. For a full explanation, read the short [tutorial][eife] by André Eife.

[eife]: https://medium.com/@a_eife/testing-config-and-run-blocks-in-angularjs-1809bd52977e
