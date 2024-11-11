//EXAMPLE of sending decimal value to SAP.
//You must format in javascript for String.
//See belor field of PESO_ULT_LIDO.
callCreate: function () {

			// read local auxiliary models
			let oModelCab 		= this.getView().getModel('modelCab');
			let oModelLoteNovo 	= this.getView().getModel('modelLoteNovo');

			// Fill data for new record in SAP
			var dados = {
				BUKRS: 			 oModelLoteNovo.oData.Bukrs,
				TRANSPORTE: 	 oModelCab.oData.transporte,
				TICKET: 		 oModelCab.oData.ticket,
				ANO: 			 oModelLoteNovo.oData.Ano,
				VSTEL: 			 oModelLoteNovo.oData.Vstel,
				LOTE: 			 oModelLoteNovo.oData.LoteNovo,
				STATUS: 		 '002',  //Status in process
				PESO_ULT_LIDO:   String(oModelCab.oData.pesoLeitura), //Decimakl field in SAP. FORMAT it here for String.
				MEINS: 			 oModelLoteNovo.oData.Medst,
				WERKS: 			 oModelLoteNovo.oData.Plant,
				MATNR: 			 oModelLoteNovo.oData.Matnr,
				LGORT: 			 oModelLoteNovo.oData.Lgort,
				VBELV: 			 oModelLoteNovo.oData.Ov,
				POSNV: 			 oModelLoteNovo.oData.OvItem,
				ORI_ESTOQUE: 	 oModelLoteNovo.oData.OriEstoque,
				USER_PICKING:    '',
				ALTURA_PALETE:   String(oModelCab.oData.alturaEntradaPalete)
				//DATA_PICKING:  ''
			};
			
			// SAP Model
			let oModel = new ODataModel("/sap/opu/odata/sap/ZGSERVICE_SRV");

			oModel.create("/EntityXPTOSet", dados, {
				success: function (oDados, response) {

        }.bind(this),
				error: function (oError) {
					// Clear field of model (linked to a field in view)
					this.getView().byId("_IDGenLoteCab").setValue("");
          
					let oMessage = JSON.parse(oError.responseText);
                    let oMessage2 = (oMessage.error.innererror.errordetails[0].message);

					MessageBox.error("Error");
				}.bind(this),
			});
		},
