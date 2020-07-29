import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ManualdatauploadService {

  constructor() { }

  public manualDataUpload = <any>[];
  public GlobalVsExposure = <any>[];

  formManualDataUpload: FormGroup = new FormGroup({
    $key: new FormControl(null),

    // Underwriting SCIB - NEW production
    underWrScibNewProEurMM: new FormControl('',Validators.required),
    underWrScibNewProOpera: new FormControl('',Validators.required),
    //Underwriting SCIB - Exposure
    underWrScibExposuEurMM: new FormControl('',Validators.required),
    underWrScibExposuOpera: new FormControl('',Validators.required),
    //Underwriting Corporate - New production
    underWrCorpNewProEurMM: new FormControl('',Validators.required),
    underWrCorpNewProOpera: new FormControl('',Validators.required),
    //Underwriting Corporate - Exposure
    underWrCorpExposuEurMM: new FormControl('',Validators.required),
    underWrCorpExposuOpera: new FormControl('',Validators.required),
    //Total Draw exposure - Non performing
    TotDrawExpoNonPerfEurMM: new FormControl('',Validators.required),
    TotDrawExpoNonPerfOpera: new FormControl('',Validators.required),
    //Total stock of hung deals
    TotStockOfHungDealEurMM: new FormControl('',Validators.required),
    TotStockOfHungDealOpera: new FormControl('',Validators.required),
    //Obligor/Borrower Names - Nung Deals
    ObligBorNamNunDealEurMM: new FormControl('',Validators.required),
    ObligBorNamNunDealOpera: new FormControl('',Validators.required),
    //Hield Yield Trading arranged by the bank
    HielYielTrArByBankEurMM: new FormControl('',Validators.required),
    HielYielTrArByBankOpera: new FormControl('',Validators.required),
    //High Yield Trading
    HighYieldTradingEurMM: new FormControl('',Validators.required),
    HighYieldTradingOpera: new FormControl('',Validators.required),
    //Loan trading
    LoanTradingEurMM: new FormControl('',Validators.required),
    LoanTradingOpera: new FormControl('',Validators.required),
    //CLO
    CLOEurMM: new FormControl('',Validators.required),
    CLOOpera: new FormControl('',Validators.required),


  });


  formGlobalVsExposure: FormGroup = new FormGroup({
    $key: new FormControl(null),

    // Asia
    asia: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    // Continental Europe
    continentalEurope: new FormControl('',Validators.required),
    // Brasil
    brasil: new FormControl('',Validators.required),
    // Chile
    chile: new FormControl('',Validators.required),
    // España
    espana: new FormControl('',Validators.required),
    // Mexico
    mexico: new FormControl('',Validators.required),
    // Polonia
    polonia: new FormControl('',Validators.required),
    // Portugal
    portugal: new FormControl('',Validators.required),
    // Uk
    uk: new FormControl('',Validators.required),
    // EEUU
    eeuu: new FormControl('',Validators.required),
    // Total Grupo
    totalGrupo: new FormControl('',Validators.required),
  });

  // getManualDataUpload(){
  //   this.manualDataUpload = 
  // }

  insertManualDataUpload(dataUpload){
    this.manualDataUpload.push(
      {
        underWrScibNewProEurMM: dataUpload.underWrScibNewProEurMM,
        underWrScibNewProOpera: dataUpload.underWrScibNewProOpera,
        underWrScibExposuEurMM: dataUpload.underWrScibExposuEurMM,
        underWrScibExposuOpera: dataUpload.underWrScibExposuOpera,
        underWrCorpNewProEurMM: dataUpload.underWrCorpNewProEurMM,
        underWrCorpNewProOpera: dataUpload.underWrCorpNewProOpera,
        underWrCorpExposuEurMM: dataUpload.underWrCorpExposuEurMM,
        underWrCorpExposuOpera: dataUpload.underWrCorpExposuOpera,
        TotDrawExpoNonPerfEurMM: dataUpload.TotDrawExpoNonPerfEurMM,
        TotDrawExpoNonPerfOpera: dataUpload.TotDrawExpoNonPerfOpera,
        TotStockOfHungDealEurMM: dataUpload.TotStockOfHungDealEurMM,
        TotStockOfHungDealOpera: dataUpload.TotStockOfHungDealOpera,
        ObligBorNamNunDealEurMM: dataUpload.ObligBorNamNunDealEurMM,
        ObligBorNamNunDealOpera: dataUpload.ObligBorNamNunDealOpera,
        HielYielTrArByBankEurMM: dataUpload.HielYielTrArByBankEurMM,
        HielYielTrArByBankOpera: dataUpload.HielYielTrArByBankOpera,
        HighYieldTradingEurMM: dataUpload.HighYieldTradingEurMM,
        HighYieldTradingOpera: dataUpload.HighYieldTradingOpera,
        LoanTradingEurMM: dataUpload.LoanTradingEurMM,
        LoanTradingOpera: dataUpload.LoanTradingOpera,
        CLOEurMM: dataUpload.CLOEurMM,
        CLOOpera: dataUpload.CLOOpera
      }
    );

    console.log("this.manualDataUpload: ", this.manualDataUpload)
  }


  insertGlobalVsExposure(dataUpload){
    this.GlobalVsExposure.push(
      {
        asia:dataUpload.asia,
        continentalEurope:dataUpload.continentalEurope,
        brasil:dataUpload.brasil,
        chile:dataUpload.chile,
        espana:dataUpload.espana,
        mexico:dataUpload.mexico,
        polonia:dataUpload.polonia,
        portugal:dataUpload.portugal,
        uk:dataUpload.uk,
        eeuu:dataUpload.eeuu,
        totalGrupo:dataUpload.totalGrupo
      }
    );

    console.log("this.GlobalVsExposure: ", this.GlobalVsExposure)
  }

}
