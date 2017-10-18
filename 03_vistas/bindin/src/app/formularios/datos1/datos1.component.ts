import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  sNombre: string;
  @ViewChild('inputNombre') nombreAlmoadilla: ElementRef;

  constructor() {}

  ngOnInit() {
    this.sNombre = 'Pepe';
  }

  btnBorrar (evento) {
    this.sNombre = '';
    console.log(this.nombreAlmoadilla.nativeElement.value);
    console.log(evento);
  }

}
