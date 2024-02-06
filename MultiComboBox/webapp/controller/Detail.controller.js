sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("sapui5.demo.mvcapp.controller.Detail", {
    onInit: function () {
      //----------------------------------------------------
      // Preencher MultiComboBox Auxiliar ()
      // Com os grupos que o usuario preencheu em um momento anterior...
      //----------------------------------------------------
      var modelMultiComboBox = new sap.ui.model.json.JSONModel();
      var listaTodosGruposOperacoesPossiveisLOCAL = [];
      var selected = [];
    },
    onAfterRendering: function () {
      let oData = this.getOwnerComponent().getModel().getData();
      let aCadastros = [];
      try {
        aCadastros = oData.Cadastros[0];
      } catch (error) {
        return;
      }

      //----------------------------------------------------
      // Preencher MultiComboBox Auxiliar ()
      // Com os grupos que o usuario preencheu em um momento anterior...
      //----------------------------------------------------

      let aTodosGruposDoModel = "";
      var modelMultiComboBox = new sap.ui.model.json.JSONModel();
      var aTodosGruposLOCAL = [];
      var aSelected = [];

      let aTodosGruposDoCAMPO = aCadastros.Grupo.split(";");

      //----------------------------------------------------
      // Retirar espaços
      //----------------------------------------------------
      for (let j = 0; j < aTodosGruposDoCAMPO.length; j++) {
        aTodosGruposDoCAMPO[j] = aTodosGruposDoCAMPO[j].trim();
      }

      //----------------------------------------------------
      // LER TODOS Grp. Possiveis do MODEL...
      //----------------------------------------------------
      try {
        aTodosGruposDoModel = oData.Grupos;
      } catch (error) {
        return;
      }

      //----------------------------------------------------
      // Preencher objeto com linha atual do Grupo do Model Global
      //----------------------------------------------------
      for (let i = 0; i < aTodosGruposDoModel.length; i++) {
        var oGrupoAtual = {
          Description: aTodosGruposDoModel[i].Description.trim(),
        };

        // Marcar Grp atual como SELECTED no MultiComboBox, CASO ele ja existia no campo original
        let registroEncontrado = aTodosGruposDoCAMPO.find((regEncontrado) => regEncontrado == aTodosGruposDoModel[i].Description);
        //Se existe
        if (!!registroEncontrado) {
          //Adicionar como SELECTED...
          aSelected.push(aTodosGruposDoCAMPO[i].trim());
          //Se não existe
        } else {
          //Não precisa adicionar nos SELECTED...
        }
        aTodosGruposLOCAL.push(oGrupoAtual);
      }

      modelMultiComboBox.setData({
        Grupos: aTodosGruposLOCAL,
        selected: aSelected,
      });

      let oMultiSelect = this.byId("_IDMultiInputAux");

      oMultiSelect.bindProperty("selectedKeys", "/selected");

      oMultiSelect.setModel(modelMultiComboBox);
    },
    onNavPress: function () {
      oApp.back(); //oApp foi declarado no index.html como variável global.
    },
    onGravar: function (oEvent) {
      this.byId("_IDMultiInputInvisivel").setValue("");
      let oMultiSelect = this.byId("_IDMultiInputAux").getSelectedKeys();
      let campoInvisivelValor = "";
      let countConcatenados = 0;

      // Guardar valores escolhidos do MultiComboBox
      // no campo oculto ...
      for (let index = 0; index < oMultiSelect.length; index++) {
        if (countConcatenados == 0) {
          campoInvisivelValor = oMultiSelect[index].trim();
        } else {
          campoInvisivelValor += `; ` + oMultiSelect[index].trim();
        }
        countConcatenados++;
      }
      this.byId("_IDMultiInputInvisivel").setValue(campoInvisivelValor);
    },
  });
});
