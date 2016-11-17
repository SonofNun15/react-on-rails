// This file isn't transpiled, so we must use CommonJS and ES5

/* eslint-disable */

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that the test framework does not understand
require.extensions['.css'] = function() {};

/* eslint-enable */
