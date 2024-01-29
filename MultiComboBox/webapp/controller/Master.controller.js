sap.ui.define(
  [
    //REQUIRES:
    // declaring modules in here,
    // which are loaded asynchronously to solve its dependencies
    // and for better performance...
    //It is defined as asynchronous module definition (AMD)
    // and it is great for performance.
    //When you organize your code in modules, you can easily assembly your application...
    //UNFORTUNATELLY the order of loading of modules is not garanteed.
    //WHEN YOU need ensuring synchronous module definitions,
    //  you must use JQuery.sap.declare or JQuery.sap.require.
    "sap/ui/core/mvc/Controller",
  ],
  function (Controller) {
    "use strict";
    return Controller.extend("sapui5.demo.mvcapp.controller.Master", {
      onListPress: function (oEvent) {
        debugger;
        // var sPageId = "detailPage"; //hard coded
        //GET PAGE ID dynamically
        var sPageId = oApp.getPages()[1].getId();

        oApp.to(sPageId);

        var oPage = oApp.getPage(sPageId);
        var oContext = oEvent.getSource().getBindingContext();
        oPage.setBindingContext(oContext);
      },
    });
  }
);
