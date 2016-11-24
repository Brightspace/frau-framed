'use strict';

var expect = require('chai').expect;

var framed = require('../');

describe('framed', function() {
	beforeEach(function() {
		global.window = {};
	});

	describe('window.D2L', function() {
		it('should return true if is undefined', function() {
			var val = framed();
			expect(val).to.be.true;
		});

		it('should return false if is defined', function() {
			global.window.D2L = {};

			var val = framed();
			expect(val).to.be.false;
		});
	});

	describe('window.D2L.frau.forceFramed', function() {
		it('should return true if is defined', function() {
			global.window.D2L = {};
			global.window.D2L.frau = { forceFramed: true };

			expect(framed()).to.be.true;
		});

		it('should return false if is false', function() {
			global.window.D2L = {};
			global.window.D2L.frau = { forceFramed: false };

			expect(framed()).to.be.false;
		});

		it('should return false if is undefined', function() {
			global.window.D2L = {};
			global.window.D2L.frau = {};

			expect(framed()).to.be.false;
		});
	});
});
