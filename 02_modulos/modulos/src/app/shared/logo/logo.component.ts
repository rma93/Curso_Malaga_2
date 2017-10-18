import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logo: string;
  constructor() { }

  ngOnInit() {
    this.logo = '../../../assets/icono.png';
  }

}
