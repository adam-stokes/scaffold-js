#!/usr/bin/env node
'use strict';
var meow = require('meow');
var scaffoldJs = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ scaffold-js [input]',
		'',
		'Examples',
		'  $ scaffold-js',
		'  unicorns & rainbows',
		'',
		'  $ scaffold-js ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(scaffoldJs(cli.input[0] || 'unicorns'));
