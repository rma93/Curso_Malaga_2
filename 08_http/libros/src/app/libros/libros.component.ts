import { Http } from '@angular/http';
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

  constructor(private http: Http) { }

  ngOnInit() {
    this.url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    this.aLibros = [];
  }

  buscarLibros () {
    this.aLibros = [];
    this.http.get(this.url + this.claveLibro).subscribe(
      response => {
        const data = response.json();
        console.log(data);
        for (let i = 0; i < data.items.length; i++) {
          const bookTitle = data.items[i].volumeInfo.title;
          const bookAuthor = data.items[i].volumeInfo.authors;
          const bookCat = data.items[i].volumeInfo.categories;
          this.aLibros.push(bookTitle + ' - ' + bookAuthor + ' (' + bookCat + ') ');
        }
      },
      error => console.log(error)
    );

    // this.aLibros = this.buscarService.getLibros(this.claveLibro);
    // console.log(this.aLibros);
  }
}
