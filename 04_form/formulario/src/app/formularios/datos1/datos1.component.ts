import { Libro, Pais } from '../libro.model';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
  @ViewChild('myform') form: any;
  oLibro: Libro;
  aPaises: Array<Pais>;
  aLibros: Array<Libro>;
  estaEnviado: boolean;
  sIdea: string;
  aIdeas: Array<string>;
  precio: number;


  constructor() {}

  ngOnInit() {
    this.sIdea = '';
    this.aIdeas = [];
    this.precio = 9;
    this.btnEliminar();
    this.aLibros = [];
    this.aPaises = [
      {codigo: 'ES', nombre: 'España'},
      {codigo: 'UK', nombre: 'Inlgaterra'},
      {codigo: 'FR', nombre: 'Francia'}
    ];
  }

  btnInsert (evento) {
    this.estaEnviado = true;
    this.aLibros.push(this.oLibro);
    console.log(this.form);
  }

  btnOrdenar (evento) {
  }

  btnEliminar() {
    this.estaEnviado = false;
    this.oLibro = {
      autor: '',
      titulo: '',
      editorial: '',
      numPag: 0,
      exlibris: false,
      genero: '',
      pais: {
        codigo: '',
        nombre: ''
      }
    };
  }

}
