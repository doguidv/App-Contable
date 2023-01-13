import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdministracionService } from './administracion.service';
import { Infocontable } from './administracion/administracion';
@Injectable({
  providedIn: 'root'
})

export class InfoContableService {
  
  Infocontable:Infocontable[]=[
  ];

  constructor(private adminservice:AdministracionService ) { }

  
  GetInfo(){
      
    return this.adminservice.getAll();
  }
  
  addToInfo(Infocontable:Infocontable){

    this.Infocontable.push(Infocontable);    
    this.adminservice.guardarInfo(this.Infocontable);
  }


}


