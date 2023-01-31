import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from  'firebase/compat/app';
import  'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router,private CoookieService:CookieService) {}

  token:string;

  Login (email:string,password:string){

    firebase.auth().signInWithEmailAndPassword(email,password).then(

      response=>{
        firebase.auth().currentUser?.getIdToken().then(
        
          token=>{

            this.token  = token;
            this.CoookieService.set("token",this.token);
            this.router.navigate(['/administracion']);
          
          }
        )
      }
    );
  }

    getIdtoken(){
  
      return this.CoookieService.get("token");
    }

  sessionstart(){

    return this.CoookieService.get("token");
    
  } 

  sessiondestroy(){

    firebase.auth().signOut().then(()=> {
      
      this.token="";
      
      this.CoookieService.set("token",this.token);
      this.router.navigate(['/']);
    });
  } 
}
