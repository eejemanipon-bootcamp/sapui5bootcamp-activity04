sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.ui5.trng.sapui5bootcampactivity04.controller.MainView", {
        onInit() {
        },
        onAddItem: function (){
            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            // var sMsg = oTextBundle.getText("addButtonMsg");
            // this.fnDisplayMsg(sMsg);

            if (!this.oDialog) {
                // By using loadFragment, we are adding the fragment as a dependent to the View
                // By doing so, we can use the functions inside the view's controller
                this.oDialog = this.loadFragment({
                    name: "com.ui5.trng.sapui5bootcampactivity04.fragment.ProductDialog"
                });
            } 
            this.oDialog.then(function(oDialog) {
                oDialog.open();
            });
        },
        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var sSelectedText = oEvent.getParameter("selectedItem").getText();
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCardNumberLabel = this.getView().byId("idLblCardNumber");
            var oCardNumberInput = this.getView().byId("idInputCardNumber");

            if (sSelectedKey === "GCASH"){
                //Show the mobile fields
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                //Hide the card number fields
                oCardNumberLabel.setVisible(false);
                oCardNumberInput.setVisible(false);
            } else if (sSelectedKey === "CC"){
                //Show the card number fields
                oCardNumberLabel.setVisible(true);
                oCardNumberInput.setVisible(true);
                //Hide the mobile fields
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
            } else {
                //Hide any other fields.
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCardNumberLabel.setVisible(false);
                oCardNumberInput.setVisible(false);
            }

            this.fnDisplayMsg(sSelectedText);
        },
        onPressCheckout: function (){
            var oInputFName = this.getView().byId("idInptFName");
            var oInputLName = this.getView().byId("idInptLName");
            var oInputFNameValue = oInputFName.getValue();
            var oInputLNameValue = oInputLName.getValue();
            var oRouter = this.getOwnerComponent().getRouter();

            // Check if first name and last name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
                
                // set value state to Error
                oInputFName.setValueState("Error");
                oInputLName.setValueState("Error");
            } else {
                oInputFName.setValueState("None");
                oInputLName.setValueState("None");

                //Navigate to review page passing first
                oRouter.navTo("ReviewPage", {
                    firstName: oInputFNameValue
                });

            }
        },
        onCloseDialog: function (){
            this.getView().byId("idProductDialog").close();
        },
        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },
    });
});