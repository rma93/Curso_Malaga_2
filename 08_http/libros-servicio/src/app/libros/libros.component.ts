import { BooksService } from '../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  url; string;
  claveLibro: string;
  aLibros: string[];

  constructor(public booksService: BooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscarLibros () {
    this.booksService.getBooks(this.claveLibro);
    // this.aLibros =
    // console.log(this.aLibros);
  }
}
