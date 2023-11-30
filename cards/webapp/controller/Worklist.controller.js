sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
      "use strict";

      return Controller.extend("validadorcarga.controller.Worklist", {
          onInit: function () {
              let dadosValidacao1 = {
                  tipoValidacaoCod: 1,
                  tipoValidacaoDesc: 'Verificar se tem registro sem Objeto contábil com DOCTYPECODE *300, *400, *500 e *600',
                  statusValido: ''
              }

              let validacao1Model = new JSONModel();
              validacao1Model.setData(dadosValidacao1); //criando dados vazios como Model da validação 1
              this.getView().setModel(validacao1Model,"modelValidacao1");//Novo modelo Validação 1

          },
          onValidarButtonClick: function (oEvent) {
              // alert("onValidarButtonClick()");
              this.requestValidacao1();
          },
          async requestValidacao1() {
              await this.selectValidacao1()
          },
          selectValidacao1() {
              console.log("chamando validaçãoCarga1()")
              return new Promise((resolve, reject) => {
                  // this.getOwnerComponent().getModel().read(`/selectValidacao1()`, {
                  this.getView().getModel().read(`/selectValidacao1()`, {
                      success: oData => {
                          console.log("Sucesso Validacao 1",oData)
                          // Chart 1B
                          // this.processValidacao1(oData.results);
                          let view = this.getView();
                          let model = view.getModel("modelValidacao1");
                          let dadosValidacao1 = model.getData();
                          debugger;
                          if (oData.selectValidacao1.count == 0) {
                              dadosValidacao1.statusValido = 'Sucesso';
                          } else {
                              dadosValidacao1.statusValido = 'Erro';
                          }
                          
                          // //atualizar o modelo
                          model.refresh();

                          // resolve()
                      },
                      error: oError => {
                          console.log(oError);
                      }
                  })
              })
          }
          // onPressExecutar: async function (oEvent) {

          //     let oView = this.getView();
          //     let strDtIni = oView.byId("inpDataIni1").getValue();
          //     let strDtFim = oView.byId("inpDataFim1").getValue();
  
          //     let dtIni = oView.byId("inpDataIni1").getDateValue();
          //     let dtFim = oView.byId("inpDataFim1").getDateValue();
  
          //     if (!dtIni) {
          //         sap.m.MessageToast.show("Data Ini vazia !");
          //         // dados.Region.focus();
          //         return;
          //     }
          //     if (!dtFim) {
          //         sap.m.MessageToast.show("Data Fim vazia !");
          //         // dados.Region.focus();
          //         return;
          //     }
  
          //     if (dtIni > dtFim) {
          //         sap.m.MessageToast.show("Data Ini maior que Data Fim !");
          //         // dados.Region.focus();
          //         return;
          //     }
  
          //     let dtIniAno = (strDtIni.substring(6, 10));
          //     let dtIniMes = (strDtIni.substring(3, 5));
          //     let dtIniDia = (strDtIni.substring(0, 2));
          //     let dtIniFormatoSap = dtIniAno + dtIniMes + dtIniDia;
  
          //     let dtFimAno = (strDtFim.substring(6, 10));
          //     let dtFimMes = (strDtFim.substring(3, 5));
          //     let dtFimDia = (strDtFim.substring(0, 2));
          //     let dtFimFormatoSap = dtFimAno + dtFimMes + dtFimDia;
  
          //     let dados = {
          //         DataDe: dtIniFormatoSap,
          //         DataAte: dtFimFormatoSap
          //     }
  
          //     let path = `/CARGAINBDatasSet(DataDe='${dados.DataDe}',DataAte='${dados.DataAte}')`;
          //     this.getOwnerComponent().getModel().read(path, {
          //         success: function (oData) {
          //             try {
          //                 let dataLonga = new Date();
          //                 let dataAtualShort = dataLonga.toLocaleDateString('pt-BR');//'2023-06-07'
          //                 let horaAtualShort = dataLonga.toLocaleTimeString('pt-BR');//hh:mm:ss
  
          //                 let dataExecutionInterna =  dataAtualShort.substring(6, 10) + '-' + 
          //                                             dataAtualShort.substring(3, 5) + '-' + 
          //                                             dataAtualShort.substring(0, 2);
          //                 let dataIniInterna = strDtIni.substring(6, 10) + '-' + strDtIni.substring(3, 5) + '-' + strDtIni.substring(0, 2);
          //                 let dataFimInterna = strDtFim.substring(6, 10) + '-' + strDtFim.substring(3, 5) + '-' + strDtFim.substring(0, 2);
          //                     //Inserir log na tabela CARGA_HIST
          //                     let dados_hist = {
          //                         usuario_execution: '',
          //                         data_execution: dataExecutionInterna, //'2023-06-07'
          //                         hora_execution: horaAtualShort, //hh:mm:ss.s
          //                         data_carga_ini: dataIniInterna,
          //                         data_carga_fim: dataFimInterna
          //                     };
  
          //                     var oModelCreate = oView.getModel();
  
          //                     oModelCreate.create("/CARGA_HIST", dados_hist, {
          //                         success: function (oData,response){
          //                             console.log('Inserindo Log na tab. CARGA_HIST');
          //                             console.log(response);
          //                         }.bind(this),
          //                             error: function(erro){
          //                             console.log(erro);
          //                         }.bind(this)
          //                     });
          //             } catch (error) {
          //                 console.log(error);
          //             }
          //         }, error: function (oError) {
          //             console.log('Erro ao chamr API');
          //             console.log(oError);
          //             // MessageToast.show(ctx.getView().getModel("i18n").getResourceBundle().getText(`ReprocessarErro`));
          //         }
  
          //     });
          // }
      });
  });
