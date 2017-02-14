var helpers = require('yeoman-test');
var path = require('path');

beforeEach(function () {
    // The object returned act like a promise, so return it to wait until the process is done
    return helpers.run(path.join(__dirname, '../app'))
        .withOptions({ foo: 'bar' })    // Mock options passed in
        .withArguments(['name-x'])      // Mock the arguments
        .withPrompts({ name: 'toot' }); // Mock the prompt answers
})