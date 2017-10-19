import { BooksService } from '../services/books.service';
import { debug } from 'util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  public usuario: string;

  @Output()
  public eventoBorrar: EventEmitter<string> = new EventEmitter<string>();

  nombre: string;
  aLibros: Array<string>;

  constructor(private librosServicios: BooksService) {
  }

  ngOnInit() {
    this.nombre = '';
  }

  btnBorrar () {
    this.aLibros = this.librosServicios.getBooks(this.nombre);
  }
}
