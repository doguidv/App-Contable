import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { MayoresComponent } from './mayores/mayores.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AdministracionComponent,
    MayoresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
