sap.ui.define([
"sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sapui5.demo.mvcapp.controller.Detail", {
        onNavPress: function () {
            oApp.back(); //oApp is a global variable declared in index.html inside script tag.
        }
    });
});