sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.ui5.trng.sapui5bootcampactivity04.controller.MainView", {
        onInit() {
        },
        onAddItem: function (){
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
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
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue(); //Added

            //Check if first name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
                sap.m.MessageToast.show("Required Field is blank"); 
            }
        },
        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },
    });
});