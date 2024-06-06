
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsarisServiceService {
  usuaris: any [];

  constructor() {
    const usuarisGuardats = sessionStorage.getItem('usuaris');
    this.usuaris = usuarisGuardats ? JSON.parse(usuarisGuardats) : [[]];
  }

  addUser(usuari: string) {

    this.usuaris[0].push(usuari)

    sessionStorage.setItem('usuaris', JSON.stringify(this.usuaris));

    console.log("s'ha guardat " + usuari)
    console.log(this.usuaris)
  }
}
