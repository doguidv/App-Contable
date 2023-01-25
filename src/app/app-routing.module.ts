import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './administracion/administracion.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { DeTallesPrecioComponent } from './de-talles-precio/de-talles-precio.component';
import { HomeComponent } from './home/home.component';
import { MayoresComponent } from './mayores/mayores.component';
import { UpDateComponent } from './up-date/up-date.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'Mayores',
    component: MayoresComponent
    },
  {
    path:'administracion',
    component: AdministracionComponent
  },
  {
    path:'Update/:id',
    component:  UpDateComponent
  },
    {path:'Buscar/:id',
  component:MayoresComponent
  },
  {
    path:'Tipo_Especie',
    component:  CategoriasComponent
  },
  {
    path: 'DetallesPrecio:id',
    component:  DeTallesPrecioComponent
  }

  /*
  {
    path:'registro',
    component: EmpleadosComponent,canActivate:[LoginGuardian]
  },
  {
    path:'login',
    component: LoginComponent
  },*/
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

