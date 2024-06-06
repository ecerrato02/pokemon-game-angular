import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
// @ts-ignore
import {UsuarisService} from "../usaris-service.service"

@Component({
  selector: 'app-iniciar-sessio',
  templateUrl: './iniciar-sessio.component.html',
  styleUrls: ['./iniciar-sessio.component.css']
})
export class IniciarSessioComponent implements OnInit {

  constructor(private router: Router) { }

  Iniciar(){
    this.router.navigate(['/home'])
    // @ts-ignore
    let usuaris = document.getElementById("jugadors").value

    // @ts-ignore
    this.UsuarisService.addusuaris(usuaris)
  }

  ngOnInit(): void {
  }

}
