import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog-table',
  templateUrl: './element-dialog-table.component.html',
  styleUrls: ['./element-dialog-table.component.css']
})
export class ElementDialogTableComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ElementDialogTableComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit(): void {
  }

  gotoLog(){
    this.dialogRef.close("/file-log");
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
