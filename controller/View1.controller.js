sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("naruto.github.controller.View1", {

        onInit: function () {
            var oModel = new JSONModel();
            oModel.loadData("../model/data.json"); 
            this.getView().setModel(oModel);
        },

        onItemPress: function (oEvent) {

            var oItem = oEvent.getParameter("listItem");
            var oContext = oItem.getBindingContext();

            var oDetailPage = this.byId("detailPage");
            oDetailPage.bindElement(oContext.getPath());

            this.byId("SplitApp").toDetail(oDetailPage);
        }

    });
});