import { Component, OnInit, ViewChild  } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
//import { ElementDialogTableComponent } from '../element-dialog-table/element-dialog-table.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-element-file-log',
  templateUrl: './element-file-log.component.html',
  styleUrls: ['./element-file-log.component.css']
})
export class ElementFileLogComponent implements OnInit {

  constructor(
    private service: ElementService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  // Tabla
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['sku', 'name', 'description', 'unit_price', 'image_url', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Formulario
  public sub: any;
  public page: any;
  public jsonParseObject: any;
  
  public form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
    lastModified: new FormControl(''),
    lastModifiedUser: new FormControl(''),
    businessUnit: new FormControl(''),
    status: new FormControl('')
  });

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

      this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        //this.page = +params['page'] || 0;
        this.page = params.page
        this.jsonParseObject = JSON.parse(this.page);
        console.log("JSON.stringify() posted: ", this.jsonParseObject);
        this.form.setValue({
          $key:this.jsonParseObject.$key,
          name: this.jsonParseObject.sku,
          lastModified:this.jsonParseObject.name,
          lastModifiedUser:this.jsonParseObject.description,
          businessUnit:this.jsonParseObject.id,
          status:this.jsonParseObject.imageUrl
        })
        //console.log("JSON.parse(): ", JSON.parse(this.page));
      });

      
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ElementDialogTableComponent, {
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed')
  //   });
  // }

}
