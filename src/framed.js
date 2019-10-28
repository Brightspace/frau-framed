'use strict';

module.exports = function framed() {
	return !window.D2L || !window.D2L.IsNotAnIframedApp;
};
