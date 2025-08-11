/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/ui5/trng/sapui5bootcampactivity04/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
