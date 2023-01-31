import { Component } from '@angular/core';
import  firebase from 'firebase/compat/app';
import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App-contable';

  constructor(private loginService:LoginService){}

      ngOnInit():void{
  
       firebase.initializeApp ({
          apiKey: "AIzaSyCXKaO43lLWUaIX-5WPTQZlr9Cz03kzRF0",
            authDomain: "appcontable-c8190.firebaseapp.com",
  
        });
      }

      sessionStart(){
        return this.loginService.sessionstart();
      }

      sessiondestroy(){
      
        this.loginService.sessiondestroy();
      }
}

