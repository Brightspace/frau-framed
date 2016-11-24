'use strict';

function forceFramed(d2l) {
	return !!(d2l && d2l.frau && d2l.frau.forceFramed);
}

module.exports = function framed() {
	return !window.D2L || forceFramed(window.D2L);
};
