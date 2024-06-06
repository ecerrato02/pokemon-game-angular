import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../usuarios.service";

@Component({
  selector: 'app-iniciar-sessio-cerrato',
  templateUrl: './iniciar-sessio-cerrato.component.html',
  styleUrls: ['./iniciar-sessio-cerrato.component.css']
})
export class IniciarSessioCerratoComponent implements OnInit {
  nombre: string = '';

  guardar() {
    // @ts-ignore
    this.nombre = document.getElementById('nombreJugador').value;
    // console.log(this.nombre);
    // @ts-ignore
    // console.log(document.getElementById('nombreJugador').value)

    this.UsuariosService.guardarNombre(this.nombre);
  }


  constructor(private UsuariosService: UsuariosService) {

  }

  ngOnInit(): void {
  }

}
