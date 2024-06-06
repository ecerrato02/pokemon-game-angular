import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../usuarios.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre: string = ''
  puntuacion: number = 0;

  pillarNombre(){
    this.nombre = this.UsuariosService.getNom()
  }
  pillarPuntuacion(){
    this.puntuacion = this.UsuariosService.getPuntuacion()
  }
  constructor(    private UsuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.pillarNombre();
    this.pillarPuntuacion();

  }


}

