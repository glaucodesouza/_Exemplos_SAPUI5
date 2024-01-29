sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("sapui5.demo.mvcapp.controller.Detail", {
    onNavPress: function () {
      oApp.back(); //oApp foi declarado no index.html como variável global.
    },
  });
});
