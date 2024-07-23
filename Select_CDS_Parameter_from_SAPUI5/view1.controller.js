//Select a CDS with parameter, from sapui5.
var oModelD = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/my_Odata/", {json: true,loadMetadataAsync: true});
var result = oModelD.read("/my_entity(p_node='mysearch')/Set",{ 
                    async: true,
                    success: function (oData, response) {
                        alert(oData.results[0].variable);
                    }
                });
