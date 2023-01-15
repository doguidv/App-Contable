import { Injectable } from '@angular/core';
import { Categorias } from './categorias/categorias';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddCategoriasService {
  private _AddCateg:Categorias[]=[];

  AddInfo: BehaviorSubject<Categorias[]>= new BehaviorSubject(this._AddCateg);
  constructor() { }
  
  addToCategorias(Categorias:Categorias){
  
    let item=this._AddCateg.find((v1)=>v1.Tipo_Inversion==Categorias.Tipo_Inversion);
  
    if(!item){
      this._AddCateg.push({  ...Categorias});
    }else{
      item.Tipo_Inversion
    }
    console.log(this._AddCateg);
    this.AddInfo.next(this._AddCateg)
  }
  }
