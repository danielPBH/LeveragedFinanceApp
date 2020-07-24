import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';
//import { Book } from '../../interfaces/index';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ElementDialogTableComponent } from '../element-dialog-table/element-dialog-table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element-table',
  templateUrl: './element-table.component.html',
  styleUrls: ['./element-table.component.css']
})
export class ElementTableComponent implements OnInit {

  //books: Book[] = [];

  constructor(
    private service: ElementService,
    public dialog: MatDialog,
    private route: Router,
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['sku', 'name', 'description', 'unit_price', 'image_url', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit(): void {
    this.service.getBooks().subscribe(
      //data => this.books = data
      list => {
        let array = list.map(item => {
          return {
            $key: item.id,
            ...item
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  openDialog(row): void {
    //console.log("row: ", JSON.stringify(row))
    const dialogRef = this.dialog.open(ElementDialogTableComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.route.navigate([result]);
      
      console.log("row type: ", row)
      const prueba = JSON.stringify(row);
      //console.log("row: ", row);
      console.log("JSON.stringify() 1: ", prueba);
      //console.log("JSON.parse(): ", JSON.parse(prueba));

      this.route.navigate([result], { queryParams: { page: prueba} })
    });
  }

}
