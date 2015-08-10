# scaffold-js [![Build Status](https://travis-ci.org/battlemidget/scaffold-js.svg?branch=master)](https://travis-ci.org/battlemidget/scaffold-js)

> personal node project scaffold


## Install

```
$ npm install --save scaffold-js
```


## Usage

```js
var scaffoldJs = require('scaffold-js');

scaffoldJs('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global scaffold-js
```
```
$ scaffold-js --help

  Usage
    scaffold-js [input]

  Example
    scaffold-js
    unicorns & rainbows

    scaffold-js ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```


## API

### scaffoldJs(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Adam Stokes](http://astokes.org)
