import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor(private LoginService:LoginService){

}

  login(form:NgForm){

    const email=  form.value.email
  
    const password  = form.value.password
    
    this.LoginService.Login(email,password);
  }
}
