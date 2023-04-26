import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './ruta-usuario/ruta-usuario.component';
import { RutaDefaultComponent } from './ruta-default/ruta-default.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'usuario',
    component: RutaUsuarioComponent
  },
  {
    path: '',
    redirectTo:'inicio',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: RutaDefaultComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }