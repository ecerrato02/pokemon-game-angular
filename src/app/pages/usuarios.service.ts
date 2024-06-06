import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  nombre: string = ''
  usuarios: string [] = []
  puntuacion: number = 0
  score: number [] = [];
  constructor() { }

  guardarNombre(nombre: string){
    this.nombre = nombre
  }
  getNom(){
    return this.nombre;
  }
  getPuntuacion(){
    return this.puntuacion;
  }
  getAllUsuarios(){
    return this.usuarios;
  }
  getAllScores(){
    return this.score;
  }

  setPuntuacion(puntuacion: number){
    this.puntuacion = puntuacion;
  }

  guardarScore(){
    this.usuarios.push(this.nombre)
    this.score.push(this.puntuacion)
  }
}
