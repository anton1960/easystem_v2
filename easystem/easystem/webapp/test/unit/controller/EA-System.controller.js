/*global QUnit*/

sap.ui.define([
	"ea/easystem/controller/EA-System.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EA-System Controller");

	QUnit.test("I should test the EA-System controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
