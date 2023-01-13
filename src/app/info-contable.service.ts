import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdministracionService } from './administracion.service';

import { Infocontable } from './administracion/administracion';
@Injectable({
  providedIn: 'root'
})

export class InfoContableService {
  
  _AddInfo:Infocontable[]=[
   
  ];

  constructor(private adminservice:AdministracionService) { }

  
  GetInfo(){
      
    return this.adminservice.getAll();
  }
  
  addToInfo(Infocontable:Infocontable){

    this._AddInfo.push(Infocontable);    
    this.adminservice.guardarInfo(this._AddInfo);
  }


}


