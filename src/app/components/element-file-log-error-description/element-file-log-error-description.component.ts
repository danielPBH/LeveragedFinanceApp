import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ElementService } from 'src/app/services/element.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-element-file-log-error-description',
  templateUrl: './element-file-log-error-description.component.html',
  styleUrls: ['./element-file-log-error-description.component.css']
})
export class ElementFileLogErrorDescriptionComponent implements OnInit {

  displayedColumns: string[] = ['date', 'errorDescription'];
  
  constructor(
    public dialogRef: MatDialogRef<ElementFileLogErrorDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private service: ElementService,
  ) {
    console.log("data: ", data)
    console.log("JSON: ", JSON.stringify(data))
    
    
    this.listData = new MatTableDataSource(data);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

  //Tabla
  listData: MatTableDataSource<any>;
  //displayedColumns: string[] = ['sku', 'name', 'description', 'unit_price', 'image_url', 'actions'];
  //displayedColumns: string[] = ['date', 'errorDescription'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //

  ngOnInit(): void {

    // //Populate table
    // this.service.getBooks().subscribe(
    //   //data => this.books = data
    //   list => {
    //     let array = list.map(item => {
    //       return {
    //         $key: item.id,
    //         ...item
    //       };
    //     });

    //     console.log("array Type: ", typeof (array))
    //     console.log("array: ", array)
    //     this.listData = new MatTableDataSource(array);
    //     this.listData.sort = this.sort;
    //     this.listData.paginator = this.paginator;
    //   });
    // //

  }

  closeDialog() {
    this.dialogRef.close();
  }

}
