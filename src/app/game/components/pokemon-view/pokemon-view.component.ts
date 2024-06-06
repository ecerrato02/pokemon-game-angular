import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styles: [
    `img {
      filter: brightness(0);
      /* width: 275px;
      height: 200px; */
    }`,
    `.cover { object-fit: cover; }`,
    `.show { filter: brightness(1); }`
  ]
})
export class PokemonViewComponent implements OnInit {

  @Input() url: string = '';
  @Input() show: boolean = true;
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() adjust: boolean = false;
  rotacion: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  rotar(){
      this.rotacion = this.rotacion - 180;


    console.log(this.rotacion);
  }

}
