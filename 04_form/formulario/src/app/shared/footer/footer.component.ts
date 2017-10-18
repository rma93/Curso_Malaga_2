import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  formador: string;
  empresa: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.formador = 'Alejandro Cerezo Lasne';
    this.empresa = 'Icono Training Consulting';
    this.fecha = new Date();
  }

}
