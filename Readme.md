This is a reduced testcase for the question: how to test the `config` function of an `angular.module`?

To try the testcase:

    npm test

On the master branch, you would get:

    Error: No pending request to flush !

The solution in the current branch avoids the problem by using a `run` block instead of a `config` block, besides correctly dealing with the order of injector construction. This solution is due to [mzulch on Stack Overflow](http://stackoverflow.com/a/38961838/1166087).
