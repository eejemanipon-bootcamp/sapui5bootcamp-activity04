sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/routing/History"
], (Controller, MessageToast, History) => {
    "use strict";

    return Controller.extend("com.ui5.trng.sapui5bootcampactivity04.controller.ReviewPage", {
        onInit() {
            // Get the router object
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("ReviewPage").attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function (oEvent) {
            // Get the passed value from arguments
            var aArgs = oEvent.getParameter("arguments");
            // Display the first name value from previous page
            MessageToast.show(aArgs.firstName);
        },
        onPressBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
            var oRouter = this.getOwnerComponent().getRouter();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                oRouter.navTo("MainView", {}, true);
            }
        }
    });
});