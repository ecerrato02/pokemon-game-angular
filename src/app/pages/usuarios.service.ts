import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  nombre: string = ''
  puntos: number = 0
  usuarios: string [] = []
  puntuacion: number = 0
  score: number [] = [];
  constructor() { }


  getPuntosIniciales(){
    return this.puntos;
  }
  guardarPuntos(puntos: number){
    this.puntos = puntos;
  }
  guardarNombre(nombre: string){
    this.nombre = nombre
    console.log(nombre)
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
