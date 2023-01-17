import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { MayoresComponent } from './mayores/mayores.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { InfoContableService } from './info-contable.service';
import { AdministracionService } from './administracion.service';
import { CategoriasComponent } from './categorias/categorias.component';
import { UpDateComponent } from './up-date/up-date.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdministracionComponent,
    MayoresComponent,
    HomeComponent,
    CategoriasComponent,
    UpDateComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdministracionService ,InfoContableService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
