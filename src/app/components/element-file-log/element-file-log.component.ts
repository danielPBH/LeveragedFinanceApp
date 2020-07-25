import { Component, OnInit, ViewChild  } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//import { ElementDialogTableComponent } from '../element-dialog-table/element-dialog-table.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ElementFileLogErrorDescriptionComponent } from '../element-file-log-error-description/element-file-log-error-description.component';


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
  //

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
  //

  ngOnInit(): void {
    
    //Populate table
    this.service.getBooks().subscribe(
      //data => this.books = data
      list => {
        let array = list.map(item => {
          return {
            $key: item.id,
            ...item
          };
        });
      
        console.log("array Type: ",typeof(array))
        console.log("array: ",array)
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
      //
      

      //Populate form
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
      });
      //
      
  }

  openDialog(row): void {

    let data:any[] = [
      {
        date: "18/06/2020 - 15:00h",
        errorDescription: "Error description 1"
      },
      {
        date: "18/06/2020 - 15:00h",
        errorDescription: "Error description 2"
      },
      {
        date: "18/06/2020 - 15:00h",
        errorDescription: "Error description 3"
      },
      {
        date: "18/06/2020 - 15:00h",
        errorDescription: "Error description 4"
      }
    ]
    
    // var data = [];
    // var data2 = {
    //   date: "18/06/2020 - 15:00h",
    //   errorDescription: "Error description 1"
    // };
    //data.push(data2);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "75%";
    dialogConfig.data = data;

    const dialogRef = this.dialog.open(ElementFileLogErrorDescriptionComponent, dialogConfig);
  }

}
