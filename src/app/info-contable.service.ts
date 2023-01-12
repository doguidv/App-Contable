import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Infocontable } from './administracion/administracion';
@Injectable({
  providedIn: 'root'
})
export class InfoContableService {
private _AddInfo:Infocontable[]=[];

AddInfo: BehaviorSubject<Infocontable[]>= new BehaviorSubject(this._AddInfo);
constructor() { }
addToInfo(Infocontable:Infocontable){

  let item=this._AddInfo.find((v1)=>v1.Fecha==Infocontable.Fecha);

  if(!item){
    this._AddInfo.push({  ...Infocontable});
  }else{
    item.Fecha
  }
  console.log(this._AddInfo);
  this.AddInfo.next(this._AddInfo)
}

}
