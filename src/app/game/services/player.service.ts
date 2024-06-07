import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from '../../../app/pages/usuarios.service'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _score: number = this.UsuariosService.getPuntosIniciales();
  private _lifes: number = 0;
  private _highScore: number = 0;

  get score(): number {
    console.log("PUNTUACION -----------------------------------------------------" + this._score)
    return this._score;
  }

  get highScore(): number {
    return this._highScore;
  }

  get lifes(): number {
    return this._lifes;
  }

  constructor(
    private _router: Router,
    private UsuariosService: UsuariosService
  ) {
    this._highScore = parseInt(localStorage.getItem('highscore') || '0');
    console.log(this._highScore);
    // console.log(Number(localStorage.getItem('highScore')))
  }

  resetGame() {
    this._score =  this.UsuariosService.getPuntosIniciales();
    this._lifes = 5;
  }

  increasePoints() {
    this._score +=  10;
  }

  decreaseLifes() {
    this._lifes -= 1;
    if (this._lifes <= 0) {

      if (this._score > this._highScore) this.newHighScore()

      this._router.navigate(['/game/gameover']);
    }
  }

  newHighScore() {
    this._highScore = this._score;
    localStorage.setItem('highscore', String(this._highScore));
  }
}
