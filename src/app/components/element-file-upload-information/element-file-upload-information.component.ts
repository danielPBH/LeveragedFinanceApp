import { Component, OnInit, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-element-file-upload-information',
  templateUrl: './element-file-upload-information.component.html',
  styleUrls: ['./element-file-upload-information.component.css']
})
export class ElementFileUploadInformationComponent implements OnInit {

  public colSize = 4;
  public isMobile: boolean = false;

  public description: any;

  public recordsWereLoaded: number = 0;
  public wereValidAndReadyToBeSaved: number = 0;
  public recordsPresentedError: number = 0;

  constructor(
    breackPointObserver: BreakpointObserver,
    public dialogRef: MatDialogRef<ElementFileUploadInformationComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    breackPointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
      if (this.isMobile) {
        this.colSize = 1;
      } else {
        this.colSize = 4;
      }
    })

    this.description = data;
    //console.log("this.description1: ", this.description.recordsWereLoaded)
    this.recordsWereLoaded = this.description.recordsWereLoaded;
    //console.log("this.description1: ", this.description.wereValidAndReadyToBeSaved)
    this.wereValidAndReadyToBeSaved = this.description.wereValidAndReadyToBeSaved;
    //console.log("this.description1: ", this.description.recordsPresentedError)
    this.recordsPresentedError = this.description.recordsPresentedError;
  }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   this.onClose();
  // }

  onClose() {
    this.dialogRef.close();
  }

}
