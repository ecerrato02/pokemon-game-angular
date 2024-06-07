import { Component, Input, OnInit } from '@angular/core';
import * as colorette from "colorette";

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

  color: string = 'red'

  constructor() { }
  cambio(){
    this.width = 100
    this.height = 100
  }
  cambiocolor(){
    return this.color
  }
  ngOnInit(): void {
  }


}
