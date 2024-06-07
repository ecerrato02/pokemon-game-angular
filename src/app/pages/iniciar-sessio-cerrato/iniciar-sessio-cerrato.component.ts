import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../usuarios.service";

@Component({
  selector: 'app-iniciar-sessio-cerrato',
  templateUrl: './iniciar-sessio-cerrato.component.html',
  styleUrls: ['./iniciar-sessio-cerrato.component.css']
})
export class IniciarSessioCerratoComponent implements OnInit {
  nombre: string = '';
  puntos: number = 0;

  guardar() {
    // @ts-ignore
    this.nombre = document.getElementById('nombreJugador').value;
    // console.log(this.nombre);
    // @ts-ignore
    this.puntos = document.getElementById('punts').value;
    console.log(this.puntos)

    this.UsuariosService.guardarNombre(this.nombre);
    this.UsuariosService.guardarPuntos(this.puntos);
  }


  constructor(private UsuariosService: UsuariosService) {

  }

  ngOnInit(): void {
  }

}
