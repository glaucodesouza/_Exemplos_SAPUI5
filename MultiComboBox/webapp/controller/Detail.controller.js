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

      // this.getOwnerComponent()
      //   .getModel()
      //   .read(`/Cadastros(ID='0')`, {
      //     success: function (oData) {
      //       debugger;
      //     }.bind(this),
      //     error: (oError) => {
      //       console.log(oError);
      //     },
      //   });

      // let aTodosGruposDoCAMPO = this.byId("_IDMultiInputInvisivel").getValue().split(";");
      // //retirar espaços

      // for (let j = 0; j < aTodosGruposDoCAMPO.length; j++) {
      //   aTodosGruposDoCAMPO[j] = aTodosGruposDoCAMPO[j].trim();
      // }
    },
    onAfterRendering: function () {
      let oData = this.getOwnerComponent().getModel().getData();
      let aCadastros = [];
      try {
        aCadastros = oData.Cadastros[0];
      } catch (error) {
        return;
      }

      debugger;
      // this.byId("_IDMultiInputInvisivel").setValue("");

      //----------------------------------------------------
      // Preencher MultiComboBox Auxiliar ()
      // Com os grupos que o usuario preencheu em um momento anterior...
      //----------------------------------------------------
      var modelMultiComboBox = new sap.ui.model.json.JSONModel();
      var listaTodosGruposOperacoesPossiveisLOCAL = [];
      var selected = [];

      let aTodosGruposDoCAMPO = aCadastros.split(";");
      //retirar espaços
      for (let j = 0; j < aTodosGruposDoCAMPO.length; j++) {
        aTodosGruposDoCAMPO[j] = aTodosGruposDoCAMPO[j].trim();
      }

      //----------------------------------------------------
      // Adicionar Todos os Grupos de Operações possíveis, no MultiComboBox aux...
      //----------------------------------------------------
      let listaTodosGruposOperacoesPossiveisGLOBAL = "";
      for (let i = 0; i < listaTodosGruposOperacoesPossiveisGLOBAL.length; i++) {
        var MedioObj = {
          GrupoOperacao: listaTodosGruposOperacoesPossiveisGLOBAL[i].Descricao.trim(),
          Descricao: listaTodosGruposOperacoesPossiveisGLOBAL[i].Descricao.trim(),
        };

        // Marcar Grp.Oper. atual como SELECTED no MultiComboBox, CASO ele ja existia no campo
        let registroEncontrado = listaTodosGrupoOperacoesDoCAMPO.find(
          (regEncontrado) => regEncontrado == listaTodosGruposOperacoesPossiveisGLOBAL[i].Descricao
        );
        //Se existe
        if (!!registroEncontrado) {
          //Adicionar como SELECTED...
          selected.push(listaTodosGrupoOperacoesDoCAMPO[i].trim());
          //Se não existe
        } else {
          //Não precisa adicionar nos SELECTED...
        }
        listaTodosGruposOperacoesPossiveisLOCAL.push(MedioObj);
      }

      modelMultiComboBox.setData({
        gruposOperacoes: listaTodosGruposOperacoesPossiveisLOCAL,
        selected: selected,
      });
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
