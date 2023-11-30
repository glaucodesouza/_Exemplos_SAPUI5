using {y_asset_tracking as my} from '../db/schema';
using {CV as vw} from '../db/schema_view';
//using {YGWGL_AT_DOCT_ASSETT_SRV as AT_doct_Asset} from '../srv/external/YGWGL_AT_DOCT_ASSETT_SRV';
using {YGWGL_AT_CARGAINB_SRV as extAT_CARGAINB_SRV2} from '../srv/external/YGWGL_AT_CARGAINB_SRV';

service CatalogService {

  entity CONFIG_PARAM_AT @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    }
  ])                      as projection on my.CONFIG_PARAM_AT;

  annotate CONFIG_PARAM_AT with @odata.draft.enabled;

  @cds.redirection.target
  entity ASSET @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingConsultante']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingReclassificador']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    }
  ])                      as projection on my.ASSET;

  @cds.redirection.target
  entity ASSET_VERSION @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingExecAltMTracking']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingConsultante']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingReclassificador']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    }
  ])                      as projection on my.ASSET_VERSION;

  entity TRACK_ORDER @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    }
  ])                      as projection on my.TRACK_ORDER;

  annotate TRACK_ORDER with @odata.draft.enabled;

  entity EVENT @(restrict: [{
    grant: ['*'],
    to   : ['AssetTrackingAdminSuport']
  }])                     as projection on my.EVENT;

  entity TRACKING @(restrict: [{
    grant: ['*'],
    to   : ['AssetTrackingAdminSuport']

  }])                     as projection on my.TRACKING;

  entity TRACK_TYPE @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    }
  ])                      as projection on my.TRACK_TYPE;

  annotate TRACK_TYPE with @odata.draft.enabled;

  entity DEVICE_TYPE @(restrict: [{
    grant: ['*'],
    to   : ['AssetTrackingAdminSuport']
  }])                     as projection on my.DEVICE_TYPE;

  entity DEVICES @(restrict: [{
    grant: ['*'],
    to   : ['AssetTrackingAdminSuport']

  }])                     as projection on my.DEVICES;

  entity NM_ALTERNATIVE @(restrict: [{
    grant: ['*'],
    to   : ['AssetTrackingAdminSuport']

  }])                     as projection on my.NM_ALTERNATIVE;

  entity ASSET_VERSION_INBOUND @(restrict: [
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingExecAltMOutlier']
    }
  ])                      as projection on my.ASSET_VERSION_INBOUND;

  entity ASSET_VERSION_INBOUND_H @(restrict: [{
    grant: ['*'],
    to   : ['AssetTrackingAdminSuport']

  }])                     as projection on my.ASSET_VERSION_INBOUND_H;

  entity OUTLIERS @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingExecAltMOutlier']
    }
  ])                      as projection on my.OUTLIERS actions {
                               @sap.applicable.path: 'reprocessarEnabled'
                               action reprocessar();
                             // @sap.applicable.path : 'ignorarEnabled'
                             // action ignorar();
                             }

  entity RECLASSIFICACAO @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingReclassificador']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingSuporteTIC']
    }
  ])                      as projection on my.RECLASSIFICACAO;

  entity DESENVOLVIMENTO  as projection on my.DESENVOLVIMENTO;

  @readonly
  entity CV_DASH_QTDEMOVATV @(restrict: [{
    grant: ['*'],
    to   : ['AssetTrackingAdminSuport']

  }])                     as projection on vw.DASH_QTDEMOVATV;

  @readonly
  entity CV_DASH_QTDEIGNORADO @(restrict: [{
    grant: ['*'],
    to   : ['AssetTrackingAdminSuport']

  }])                     as projection on vw.DASH_QTDEIGNORADO;

  entity PARCEIRO_FILIAL @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    }
  ])                      as projection on my.PARCEIRO_FILIAL;

  annotate PARCEIRO_FILIAL with @odata.draft.enabled;

  entity AT_NM_CORREL @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    }
  ])                      as projection on my.AT_NM_CORREL;

  annotate AT_NM_CORREL with @odata.draft.enabled;

  entity CARGA_HIST @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    }
  ])                      as projection on my.CARGA_HIST;

  entity VW_FLUXO_PROCESSO_ASSET @(restrict: [
    {
      grant: ['*'],
      to   : ['AssetTrackingAdminSuport']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingGestor']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingAnalista']
    },
    {
      grant: ['*'],
      to   : ['AssetTrackingConfig']
    },
    {
      grant: ['READ'],
      to   : ['AssetTrackingSuporteTIC']
    }
  ])                      as projection on my.VW_FLUXO_PROCESSO_ASSET;

  @readonly
  entity DOCT_ASSETT_SRV  as projection on my.DOCT_ASSETT_SRV;

  @readonly
  entity DatasSet         as projection on my.DatasSet;

  @readonly
  entity CARGAINBDatasSet as projection on extAT_CARGAINB_SRV2.DatasSet;

  action   Reclassificar()                                                               returns String;
  action   OutReprocessar(ids : array of String); // returns String;//array of String;

  action   OutDeletar(ids : array of String);
  action   processar_parc_filial()                                                       returns String;
  action   cancelaVs(motivoCancelado : String, vsId : String)                            returns String;

  function montaTelaMonitorTracking(sObjectId : String)                                  returns array of {
    lanes : array of TypeProcessFlowLane;
    nodes : array of TypeProcessFlowNode;
    Spots : array of TypeAnalyticMapSpots
  };

  function selecionarOutliersDashboard(dtFiltroInicial : String, dtFiltroFinal : String) returns array of viewOutliers1; //OUTLIERS;

  function selectVersionChart1B(dtFiltroInicial : String, dtFiltroFinal : String)        returns array of versionChart1B;
  function selectVersionChart2A(dtFiltroInicial : String, dtFiltroFinal : String)        returns array of versionChart2A;
  function selectVersionChart2B(dtFiltroInicial : String, dtFiltroFinal : String)        returns array of versionChart2B;
  function selectVersionChart2C(dtFiltroInicial : String, dtFiltroFinal : String)        returns array of versionChart2C;
  function selectVersionChart2D(dtFiltroInicial : String, dtFiltroFinal : String)        returns array of versionChart2D;
  function selectOutliersChart1B(dtFiltroInicial : String, dtFiltroFinal : String)       returns array of outliersChart1B; //OUTLIERS;
  function selectOutliersChart3A(dtFiltroInicial : String, dtFiltroFinal : String)       returns array of outliersChart3A; //OUTLIERS;
  function selectOutliersChart3B(dtFiltroInicial : String, dtFiltroFinal : String)       returns array of outliersChart3B; //OUTLIERS;

  function selectValidacao1()                                                            returns validacao1;
}

type TypeProcessFlowLane {
  id       : String;
  label    : String;
  position : Integer;
}

type TypeAnalyticMapSpots {
  pos           : String;
  type          : String;
  tooltip       : Integer;
  routePosition : String;
}

type TypeProcessFlowNode {
  children          : array of TypeProcessFlowNodeChildren;
  id                : Integer;
  lane              : Integer;
  state             : String;
  texts             : array of String;
  title             : String;
  titleAbbreviation : String;
  vsId              : String;
}

type TypeProcessFlowNodeChildren {
  connectionLabel : {
    id            : String;
    text          : String;
  };
  nodeId          : Integer;
}

type viewOutliers1 {
  outlierDescr : String;
  docTypeCode  : String;
  count        : Integer;
}

type versionChart1B {
  mes   : String; //2021-01
  count : Integer;
}

type outliersChart1B {
  mes   : String; //2021-01
  count : Integer;
}

type versionChart2A {
  isActiveVs : Boolean;
  cancelado  : Boolean;
  count      : Integer;
}

type versionChart2B {
  assetTypeCode : String;
  docTypeCode   : String;
  Contador      : Integer;
}

type versionChart2C {
  status_PC : String;
  cenario   : String;
  Contador  : Integer;
}

type versionChart2D {
  Contadorv0 : Integer;
  Contadorvn : Integer;
  mes        : String; //2021-01
}

type outliersChart3A {
  mes             : String; //2021-01
  classificado    : Integer;
  naoClassificado : Integer;
  total           : Integer;
}

type outliersChart3B {
  outlierDescr : String;
  docTypeCode  : String;
  count        : Integer;
}

type validacao1 {
  count : Integer;
}
