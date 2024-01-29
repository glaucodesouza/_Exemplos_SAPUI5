sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sapui5.demo.mvcapp.Component", {
      metadata: {
        rootView: "sapui5.demo.mvcapp.view.App",
        config: {
          serviceUrl: "webapp/service/data.json",
        },
      },

      createContent: function () {
        // call the base component's createContent function
        var oRootView = UIComponent.prototype.createContent.apply(
          this,
          arguments
        );

        //---HOW TO GET data.json PATH DYNAMICALLY:
        //----THIS IS IMPORTANT WHEN USING DEPLOYED APPS.
        // if the service URL would be like this: ""sapui5.demo.mvcapp.service.data"
        // then we could have used the following coding
        // var sServiceModule = this.getMetadata().getConfig().serviceUrl;
        // var sModulePath = jQuery.sap.getModulePath(sServiceModule, ".json");
        // var oModel = new JSONModel(sModulePath);

        //BUT FOR LOCAL TESTING PURPOSES, WE SET PATH LIKE THIS "WRONG WAY".
        var oModel = new JSONModel(this.getMetadata().getConfig().serviceUrl);
        this.setModel(oModel);

        // important to set the model on the component
        // and not on the sapui5 core anymore!
        this.setModel(oModel);

        var oRootView = sap.ui.view("appview", {
          type: sap.ui.core.mvc.ViewType.XML,
          viewName: "sapui5.demo.mvcapp.view.App",
        });

        oApp = oRootView.byId("app");
        return oRootView;
      },
    });
  }
);
