sap.ui.jsview("sapui5.demo.mvcapp.view.Master",{ //attention: sapui5.demo.mvcapp is the namespace for webapp folder, not the complete file path...
    getControllerName: function(){
        return "sapui5.demo.mvcapp.controller.Master";
    },
    createContent: function(oController){
        //here we will create our UI via JS Coding...
        // 3-TABLE COLUMNS the columns will act as column readers
        var aColums = [
            new sap.m.Column({
            header : new sap.m.Text({
                text : "ID"
            })
            }),
            new sap.m.Column({
            header : new sap.m.Text({
                text : "Name"
            })
            })
        ];

        // 4-TEMPLATE in the Template, we will display the supplier information
        var oTemplate = new sap.m.ColumnListItem({
            type: "Navigation",
            cells: [
                new sap.m.ObjectIdentifier({
                    text: "{ID}"
                }),
                new sap.m.ObjectIdentifier({
                    text: "{Name}"
                })
            ]
        });

        // 5-HEADER in the header, we are displaying the number of suppliers
        var oTableHeader = new sap.m.Toolbar({
            content: [
                new sap.m.Title({
                    text: "Number of suppliers {/CountSuppliers}"
                })
            ]
        });

        // 6-TABLE we create the table with the columns and header
        var oTable = new sap.m.Table({
            columns: aColums,
            headerToolbar: oTableHeader
        });

        // 7-BIND we bind the table items to the /Suppliers entries
        // and to the template
        oTable.bindItems("/Suppliers", oTemplate);
        oTable.addStyleClass("sapUiResponsiveMargin");

        // 8-PAGE
        // var oPageMaster = new sap.m.Page("masterPage",{
        var oPageMaster = new sap.m.Page({ //new line here, comparing to mvc-v1 example...
            title: "Supplier Overview",
            content: [oTable]
        });

        return oPageMaster; //new line here, comparing to mvc-v1 example...
    }
});