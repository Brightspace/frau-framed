'use strict';

var expect = require('chai').expect;

var framed = require('../');

describe('framed', function() {
	beforeEach(function() {
		global.window = {};
	});

	it('should return true if D2L is undefined', function() {
		var val = framed();
		expect(val).to.be.true;
	});

	it('should return true if D2L is defined and D2L.IsNotAnIframedApp is not defined', function() {
		global.window.D2L = {};

		var val = framed();
		expect(val).to.be.true;
	});

	it('should return false if D2L.IsNotAnIframedApp is defined', function() {
		global.window.D2L = {};
		global.window.D2L.IsNotAnIframedApp = true;

		var val = framed();
		expect(val).to.be.false;
	});

});
