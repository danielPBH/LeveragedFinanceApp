import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import * as XLSX from 'xlsx';
import { InterfaceXlsxWorkSheet } from 'src/app/interfaces';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ElementListComponent } from '../element-list/element-list.component';
import { ElementTableComponent } from '../element-table/element-table.component';
import { ElementFileUploadInformationComponent } from '../element-file-upload-information/element-file-upload-information.component';

@Component({
  selector: 'app-element-file-upload',
  templateUrl: './element-file-upload.component.html',
  styleUrls: ['./element-file-upload.component.css']
})
export class ElementFileUploadComponent implements OnInit {

  data: [][];

  public files: NgxFileDropEntry[] = [];
  //public InterfaceArrayXlsxWorkSheet: InterfaceXlsxWorkSheet[];
  public InterfaceArrayXlsxWorkSheet: InterfaceXlsxWorkSheet[] = [];
  public InterfaceXlsxWorkSheet: InterfaceXlsxWorkSheet;
  //public dataToModal = <any>[];
  recordsWereLoaded: number = 0;
  wereValidAndReadyToBeSaved: number = 0;
  recordsPresentedError: number = 0;
  isShown: boolean = false; // hidden by default

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      //console.log("droppedFile: ", droppedFile)

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          const reader: FileReader = new FileReader();

          reader.onload = (e: any) => {
            const bstr: string = e.target.result;

            const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

            const wsname: string = wb.SheetNames[0];

            const ws: XLSX.WorkSheet = wb.Sheets[wsname];

            this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

            //console.log("this.data: ",this.data);
            var i;
            var arrayXlsx = [];
            
            this.toggleShow();
            this.recordsWereLoaded = this.data.length - 4;
            this.wereValidAndReadyToBeSaved = this.data.length - 4;
            for (i = 0; i <= this.data.length - 1; ++i) {
              var InterfaceXlsx: InterfaceXlsxWorkSheet;
              if (i > 4) {
                var j;
                //console.log("this.data[i].length: ",this.data[i].length)
                arrayXlsx = [];
                for (j = 0; j <= this.data[i].length; ++j) {

                  if (this.data[i][j] === undefined) {
                    this.recordsPresentedError++;
                    switch (j) {
                      case 0:
                        arrayXlsx.push({ "empty": "null" });
                        break;
                      case 1:
                        arrayXlsx.push({ "country": "null" });
                        break;
                      case 2:
                        arrayXlsx.push({ "segment": "null" });
                        break;
                      case 3:
                        arrayXlsx.push({ "idFinancialGroup": "null" });
                        break;
                      case 4:
                        arrayXlsx.push({ "financialGroup": "null" });
                        break;
                      case 5:
                        arrayXlsx.push({ "totalGroupSantanderExposure": "null" });
                        break;
                      case 6:
                        arrayXlsx.push({ "currencyOfGroupSantanderExposure": "null" });
                        break;
                      case 7:
                        arrayXlsx.push({ "idClient": "null" });
                        break;
                      case 8:
                        arrayXlsx.push({ "client": "null" });
                        break;
                      case 9:
                        arrayXlsx.push({ "economicSector": "null" });
                        break;
                      case 10:
                        arrayXlsx.push({ "feveScan": "null" });
                        break;
                      case 11:
                        arrayXlsx.push({ "ratingClient": "null" });
                        break;
                      case 12:
                        arrayXlsx.push({ "pdAssociatedToRating": "null" });
                        break;
                      case 13:
                        arrayXlsx.push({ "companySantanderExposure": "null" });
                        break;
                      case 14:
                        arrayXlsx.push({ "currencyCompanySantanderExposure": "null" });
                        break;
                      case 15:
                        arrayXlsx.push({ "financialSponsor": "null" });
                        break;
                      case 16:
                        arrayXlsx.push({ "dealIdNumber": "null" });
                        break;
                      case 17:
                        arrayXlsx.push({ "dealAmount": "null" });
                        break;
                      case 18:
                        arrayXlsx.push({ "currencyOfDeal": "null" });
                        break;
                      case 19:
                        arrayXlsx.push({ "originaTionDate": "null" });
                        break;
                      case 20:
                        arrayXlsx.push({ "maturityDate": "null" });
                        break;
                      case 21:
                        arrayXlsx.push({ "product": "null" });
                        break;
                      case 22:
                        arrayXlsx.push({ "typeOfDeal": "null" });
                        break;
                      case 23:
                        arrayXlsx.push({ "useOfFounds": "null" });
                        break;
                      case 24:
                        arrayXlsx.push({ "seniorityBreakDown": "null" });
                        break;
                      case 25:
                        arrayXlsx.push({ "provisionAssociatedToDeal": "null" });
                        break;
                      case 26:
                        arrayXlsx.push({ "ifrs9SageAssociatedToDeal": "null" });
                        break;
                      case 27:
                        arrayXlsx.push({ "covenantTypeAssociatedToDeal": "null" });
                        break;
                      case 28:
                        arrayXlsx.push({ "guarantee": "null" });
                        break;
                      case 29:
                        arrayXlsx.push({ "typeOfGuarantee": "null" });
                        break;
                      case 30:
                        arrayXlsx.push({ "turnOver": "null" });
                        break;
                      case 31:
                        arrayXlsx.push({ "grossFinancialDebtBalance": "null" });
                        break;
                      case 32:
                        arrayXlsx.push({ "cashBalance": "null" });
                        break;
                      case 33:
                        arrayXlsx.push({ "ebitda": "null" });
                        break;
                      case 34:
                        arrayXlsx.push({ "ratioGfdEbitda": "null" });
                        break;
                      case 35:
                        arrayXlsx.push({ "shareOfRisk": "null" });
                        break;
                      case 36:
                        arrayXlsx.push({ "dalancaDate": "null" });
                        break;
                      case 37:
                        arrayXlsx.push({ "currencyBalanceInformation": "null" });
                        break;
                      default:
                    }
                  } else {
                    switch (j) {
                      case 0:
                        arrayXlsx.push({ "empty": this.data[i][j] });
                        break;
                      case 1:
                        arrayXlsx.push({ "country": this.data[i][j] });
                        break;
                      case 2:
                        arrayXlsx.push({ "segment": this.data[i][j] });
                        break;
                      case 3:
                        arrayXlsx.push({ "idFinancialGroup": this.data[i][j] });
                        break;
                      case 4:
                        arrayXlsx.push({ "financialGroup": this.data[i][j] });
                        break;
                      case 5:
                        arrayXlsx.push({ "totalGroupSantanderExposure": this.data[i][j] });
                        break;
                      case 6:
                        arrayXlsx.push({ "currencyOfGroupSantanderExposure": this.data[i][j] });
                        break;
                      case 7:
                        arrayXlsx.push({ "idClient": this.data[i][j] });
                        break;
                      case 8:
                        arrayXlsx.push({ "client": this.data[i][j] });
                        break;
                      case 9:
                        arrayXlsx.push({ "economicSector": this.data[i][j] });
                        break;
                      case 10:
                        arrayXlsx.push({ "feveScan": this.data[i][j] });
                        break;
                      case 11:
                        arrayXlsx.push({ "ratingClient": this.data[i][j] });
                        break;
                      case 12:
                        arrayXlsx.push({ "pdAssociatedToRating": this.data[i][j] });
                        break;
                      case 13:
                        arrayXlsx.push({ "companySantanderExposure": this.data[i][j] });
                        break;
                      case 14:
                        arrayXlsx.push({ "currencyCompanySantanderExposure": this.data[i][j] });
                        break;
                      case 15:
                        arrayXlsx.push({ "financialSponsor": this.data[i][j] });
                        break;
                      case 16:
                        arrayXlsx.push({ "dealIdNumber": this.data[i][j] });
                        break;
                      case 17:
                        arrayXlsx.push({ "dealAmount": this.data[i][j] });
                        break;
                      case 18:
                        arrayXlsx.push({ "currencyOfDeal": this.data[i][j] });
                        break;
                      case 19:
                        arrayXlsx.push({ "originaTionDate": this.data[i][j] });
                        break;
                      case 20:
                        arrayXlsx.push({ "maturityDate": this.data[i][j] });
                        break;
                      case 21:
                        arrayXlsx.push({ "product": this.data[i][j] });
                        break;
                      case 22:
                        arrayXlsx.push({ "typeOfDeal": this.data[i][j] });
                        break;
                      case 23:
                        arrayXlsx.push({ "useOfFounds": this.data[i][j] });
                        break;
                      case 24:
                        arrayXlsx.push({ "seniorityBreakDown": this.data[i][j] });
                        break;
                      case 25:
                        arrayXlsx.push({ "provisionAssociatedToDeal": this.data[i][j] });
                        break;
                      case 26:
                        arrayXlsx.push({ "ifrs9SageAssociatedToDeal": this.data[i][j] });
                        break;
                      case 27:
                        arrayXlsx.push({ "covenantTypeAssociatedToDeal": this.data[i][j] });
                        break;
                      case 28:
                        arrayXlsx.push({ "guarantee": this.data[i][j] });
                        break;
                      case 29:
                        arrayXlsx.push({ "typeOfGuarantee": this.data[i][j] });
                        break;
                      case 30:
                        arrayXlsx.push({ "turnOver": this.data[i][j] });
                        break;
                      case 31:
                        arrayXlsx.push({ "grossFinancialDebtBalance": this.data[i][j] });
                        break;
                      case 32:
                        arrayXlsx.push({ "cashBalance": this.data[i][j] });
                        break;
                      case 33:
                        arrayXlsx.push({ "ebitda": this.data[i][j] });
                        break;
                      case 34:
                        arrayXlsx.push({ "ratioGfdEbitda": this.data[i][j] });
                        break;
                      case 35:
                        arrayXlsx.push({ "shareOfRisk": this.data[i][j] });
                        break;
                      case 36:
                        arrayXlsx.push({ "dalancaDate": this.data[i][j] });
                        break;
                      case 37:
                        arrayXlsx.push({ "currencyBalanceInformation": this.data[i][j] });
                        break;
                      default:
                    }
                  }

                }

                var IXslsWS: InterfaceXlsxWorkSheet = <InterfaceXlsxWorkSheet>{
                  country: arrayXlsx[1],
                  segment: arrayXlsx[2],
                  idFinancialGroup: arrayXlsx[3],
                  financialGroup: arrayXlsx[4],
                  totalGroupSantanderExposure: arrayXlsx[5],
                  currencyOfGroupSantanderExposure: arrayXlsx[6],
                  idClient: arrayXlsx[7],
                  client: arrayXlsx[8],
                  economicSector: arrayXlsx[9],
                  feveScan: arrayXlsx[10],
                  ratingClient: arrayXlsx[11],
                  pdAssociatedToRating: arrayXlsx[12],
                  companySantanderExposure: arrayXlsx[13],
                  currencyCompanySantanderExposure: arrayXlsx[14],
                  financialSponsor: arrayXlsx[15],
                  dealIdNumber: arrayXlsx[16],
                  dealAmount: arrayXlsx[17],
                  currencyOfDeal: arrayXlsx[18],
                  originaTionDate: arrayXlsx[19],
                  maturityDate: arrayXlsx[20],
                  product: arrayXlsx[21],
                  typeOfDeal: arrayXlsx[22],
                  useOfFounds: arrayXlsx[23],
                  seniorityBreakDown: arrayXlsx[24],
                  provisionAssociatedToDeal: arrayXlsx[25],
                  ifrs9SageAssociatedToDeal: arrayXlsx[26],
                  covenantTypeAssociatedToDeal: arrayXlsx[27],
                  guarantee: arrayXlsx[28],
                  typeOfGuarantee: arrayXlsx[29],
                  turnOver: arrayXlsx[30],
                  grossFinancialDebtBalance: arrayXlsx[31],
                  cashBalance: arrayXlsx[32],
                  ebitda: arrayXlsx[33],
                  ratioGfdEbitda: arrayXlsx[34],
                  shareOfRisk: arrayXlsx[35],
                  dalancaDate: arrayXlsx[36],
                  currencyBalanceInformation: arrayXlsx[37],
                }

                this.InterfaceArrayXlsxWorkSheet.push(IXslsWS);

              }
            }
          };

          reader.readAsBinaryString(file)
        });

        console.log("InterfaceArrayXlsxWorkSheet: ", this.InterfaceArrayXlsxWorkSheet)

      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log("2: ", droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  public fillInterfaceXlsxWorkSheet(number: any, value: string) {
    //var interfaceXlsxWorkSheet: InterfaceXlsxWorkSheet;
    var fieldValue = "NotCharged";
    var country: string;
    var segment: string;
    var idFinancialGroup: string;
    var financialGroup: string;
    var totalGroupSantanderExposure: string;
    var currencyOfGroupSantanderExposure: string;
    var idClient: string;
    var client: string;
    var economicSector: string;
    var feveScan: string;
    var ratingClient: string;
    var pdAssociatedToRating: string;
    var companySantanderExposure: string;
    var currencyCompanySantanderExposure: string;
    var financialSponsor: string;
    var dealIdNumber: string;
    var dealAmount: string;
    var currencyOfDeal: string;
    var originaTionDate: string;
    var maturityDate: string;
    var product: string;
    var typeOfDeal: string;
    var useOfFounds: string;
    var seniorityBreakDown: string;
    var provisionAssociatedToDeal: string;
    var covenantTypeAssociatedToDeal: string;
    var guarantee: string;
    var typeOfGuarantee: string;
    var turnOver: string;
    var grossFinancialDebtBalance: string;
    var cashBalance: string;
    var ebitda: string;
    var ratioGfdEbitda: string;
    var shareOfRisk: string;
    var dalancaDate: string;
    var currencyBalanceInformation: string;

    // switch (number) {
    //   case 0:
    //     fieldValue = "country";
    //     break;
    //   case 1:
    //     fieldValue = "segment";
    //     break;
    //   case 2:
    //     fieldValue = "idFinancialGroup";
    //     break;
    //   default:

    // }

    return this.InterfaceXlsxWorkSheet;
  }

  onCreate() {

    const data = <any>{
      recordsWereLoaded: this.recordsWereLoaded,
      wereValidAndReadyToBeSaved: this.wereValidAndReadyToBeSaved,
      recordsPresentedError: this.recordsPresentedError
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "75%";
    dialogConfig.data = data;
    this.dialog.open(ElementFileUploadInformationComponent, dialogConfig)
  }

  toggleShow() {

    this.isShown = !this.isShown;

  }
}
