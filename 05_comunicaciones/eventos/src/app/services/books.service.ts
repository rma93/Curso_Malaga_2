import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(clave: string) {
    return[
      'Angular Básico',
      'Angular Medio',
      'Angular Experto'
    ];
  }
}
