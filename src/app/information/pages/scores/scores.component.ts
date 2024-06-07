import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../../pages/usuarios.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
puntuaciones: any [] = [];
nombres: string [] = [];

printNombres(){

  this.nombres = this.UsuariosService.getAllUsuarios();
}
printScores(){
  this.puntuaciones = this.UsuariosService.getAllScores();

}


  constructor(private UsuariosService: UsuariosService) { }

  ngOnInit(): void {
  this.printNombres();
  this.printScores();
  }

}
