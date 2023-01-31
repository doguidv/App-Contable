import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";

@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private Loguinservice:LoginService,private Router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.Loguinservice.sessionstart()){
            return true;
        }else{

           this.Router.navigate(['login']);
           return false;
        }

    }



}

    
