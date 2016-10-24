'use strict';

jsmake.desc('Sample plugin command.');
jsmake.task('sample', function (argv) {
    console.log('Hello there!');
    console.log(argv);
});
