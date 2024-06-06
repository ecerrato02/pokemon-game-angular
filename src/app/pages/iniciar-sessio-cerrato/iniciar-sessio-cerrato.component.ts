import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sessio-cerrato',
  templateUrl: './iniciar-sessio-cerrato.component.html',
  styleUrls: ['./iniciar-sessio-cerrato.component.css']
})
export class IniciarSessioCerratoComponent implements OnInit {
  nombres: string[] = [];
  nombre: string = '';

  agregarNombre() {
    if (this.nombre.trim() !== '') {
      this.nombres.push(this.nombre);
      this.nombre = '';

    }
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
