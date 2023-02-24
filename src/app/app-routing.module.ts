import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './administracion/administracion.component';

import { DeTallesPrecioComponent } from './de-talles-precio/de-talles-precio.component';
import { HomeComponent } from './home/home.component';
import { LoginGuardian } from './login/Login-Guardian';
import { LoginComponent } from './login/login.component';
import { RegistrosSeparadosComponent } from './registros-separados/registros-separados.component';
import { UpDateComponent } from './up-date/up-date.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'administracion',
    component: AdministracionComponent,canActivate:[LoginGuardian]
  },
  {
    path:'Update/:id',
    component:  UpDateComponent,canActivate:[LoginGuardian]
  },
  {
    path: 'DetallesPrecio:id',
    component:  DeTallesPrecioComponent,canActivate:[LoginGuardian]
  },

  {
     path:'Movimientos-Diarios',
     component: RegistrosSeparadosComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

