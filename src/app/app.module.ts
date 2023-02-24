import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './administracion/administracion.component';

import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { InfoContableService } from './info-contable.service';
import { AdministracionService } from './administracion.service';
import { UpDateComponent } from './up-date/up-date.component';
import { DeTallesPrecioComponent } from './de-talles-precio/de-talles-precio.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/Login-Guardian';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { RegistrosSeparadosComponent } from './registros-separados/registros-separados.component';



@NgModule({
  declarations: [
    AppComponent,
    AdministracionComponent,
    HomeComponent,
    UpDateComponent,
    DeTallesPrecioComponent,
    LoginComponent,
    RegistrosSeparadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdministracionService ,InfoContableService,LoginService,LoginGuardian,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
