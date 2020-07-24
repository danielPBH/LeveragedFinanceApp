import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-element-file-log-error-description',
  templateUrl: './element-file-log-error-description.component.html',
  styleUrls: ['./element-file-log-error-description.component.css']
})
export class ElementFileLogErrorDescriptionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ElementFileLogErrorDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    console.log("data: ",data)
    console.log("JSON: ", JSON.stringify(data))
   }

  ngOnInit(): void {
  }

}
