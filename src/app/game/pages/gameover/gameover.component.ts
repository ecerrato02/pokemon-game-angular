import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import {UsuariosService} from "../../../pages/usuarios.service";

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  get score(): number {
    this.UsuariosService.setPuntuacion(this.playerService.score);
    this.UsuariosService.guardarScore();
    return this.playerService.score;
  }

  get highScore(): number {
    return this.playerService.highScore;
  }

  constructor(
    private playerService: PlayerService,
    private UsuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
  }

}
