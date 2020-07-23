import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/index';
import { ElementService } from 'src/app/services/element.service'

@Component({
  selector: 'app-element-list',
  //templateUrl: './element-list.component.html',
  templateUrl: './element-grid.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit {

  books: Book[] = [];

  constructor(private _elementService: ElementService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks(){
    // this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');

    // if(this.searchMode){
    //   //do search work
    //   this.handleSearchBooks();
    // }else {
    //   //display books based on category
    //   this.handleListBooks();
    // }

    this._elementService.getBooks().subscribe(
      data => this.books = data
    )
  }

}
