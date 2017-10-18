import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

class Libro {
  autor: string;
  libro: string;

  constructor(autor: string, libro: string) {
    this.autor = autor;
    this.libro = libro;
  }
}

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  oLibro: Libro;
  sIdea: string;
  aIdeas: Array<string>;
  aLibros: Array<Libro>;
  precio: number;


  constructor() {}

  ngOnInit() {
    this.sIdea = '';
    this.aIdeas = [];
    this.aLibros = [];
    this.oLibro = new Libro('', '');
    this.precio = 7;
  }

  btnInsert (evento) {
    console.log(evento);
    console.log(this.oLibro);
    this.aIdeas.push(this.sIdea);
    this.sIdea = '';
    this.aLibros.push(this.oLibro);
  }

  btnOrdenar (evento) {
    console.log(evento);
    this.aIdeas.sort();
  }

  btnEliminar() {
    this.aIdeas.pop();
  }

}
