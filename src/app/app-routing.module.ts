import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import {IniciarSessioCerratoComponent} from './pages/iniciar-sessio-cerrato/iniciar-sessio-cerrato.component'

const routes: Routes = [
  {path:'',
    component: IniciarSessioCerratoComponent},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
