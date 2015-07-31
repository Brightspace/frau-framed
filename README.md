# frau-framed

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]

Simple utility to determine if a D2L free range application
([frau](https://www.npmjs.com/browse/keyword/frau)) is loaded in an iframe.

## Install
```sh
npm install frau-framed --save
```

## Usage
```js
var framed = require('frau-framed');

if (framed()) {
	console.log('I\'m in an iframe!');
}
```

## Contributing

1. **Fork** the repository. Committing directly against this repository is
   highly discouraged.

2. Make your modifications in a branch, updating and writing new unit tests
   as necessary in the `spec` directory.

3. Ensure that all tests pass with `npm test`

4. `rebase` your changes against master. *Do not merge*.

5. Submit a pull request to this repository. Wait for tests to run and someone
   to chime in.

### Code Style

This repository is configured with [EditorConfig][EditorConfig], [jscs][jscs]
and [JSHint][JSHint] rules.


[npm-url]: https://npmjs.org/package/frau-framed
[npm-image]: https://img.shields.io/npm/v/frau-framed.svg
[ci-image]: https://img.shields.io/travis/Brightspace/frau-framed/master.svg
[ci-url]: https://travis-ci.org/Brightspace/frau-framed
[coverage-image]: https://img.shields.io/coveralls/Brightspace/frau-framed/master.svg
[coverage-url]: https://coveralls.io/r/Brightspace/frau-framed?branch=master

[EditorConfig]: http://editorconfig.org/
[jscs]: http://jscs.info/
[JSHint]: http://jshint.com/
