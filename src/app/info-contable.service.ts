import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdministracionService } from './administracion.service';
import { Infocontable } from './administracion/administracion';
@Injectable({
  providedIn: 'root'
})

export class InfoContableService {

  constructor(private adminservice:AdministracionService ) { }


  private _ListInfocontable:Infocontable[]= [];

  List: BehaviorSubject<Infocontable[]> = new BehaviorSubject(this._ListInfocontable);

  
  SetInfo(InfoCont:Infocontable[]){
    this._ListInfocontable =  InfoCont;
  
  }
  
  GetInfo(){
      
    return this.adminservice.getAll();
  }


GetLista(){
  return this._ListInfocontable;
}



  GetID(indice:number){

    let InfoCont:Infocontable=this._ListInfocontable[indice]
  return  InfoCont;
    // return  this.adminservice.GetId();
  }

  
  UpdateToInfo(indice:number,InfoCont:Infocontable){

    let InfoContModificada  = this._ListInfocontable[indice];

      InfoContModificada.Fecha= InfoCont.Fecha;
      InfoContModificada.Detalle= InfoCont.Detalle;
      InfoContModificada.Cantidad= InfoCont.Cantidad;
      InfoContModificada.Importe= InfoCont.Importe;
      InfoContModificada.CostoTotalacum=  InfoCont.CostoTotalacum + InfoCont.Total;
      InfoContModificada.DetallesCosto= InfoCont.DetallesCosto;
      InfoContModificada.Total= InfoCont.Total;
      
    this.adminservice.Actualizar(indice,InfoContModificada);
  }

  EliminarInfo(indice:number){

   this._ListInfocontable.splice(indice,1);

    if(this._ListInfocontable!=null) this.adminservice.Eliminar (indice);
  }


    
  
  addToInfo(Infocontable:Infocontable){

    let item = this._ListInfocontable.find((v1) =>v1.Detalle == Infocontable.Detalle);
 
  if(!item){
      this._ListInfocontable.push({...Infocontable});      
      this.adminservice.guardarInfo(this._ListInfocontable);
  
    }else {
      item.Fecha =  Infocontable.Fecha;
      item.Cantidad +=  Infocontable.Cantidad;   
       item.CostoTotalacum  +=  Infocontable.CostoTotalacum;     
      this.adminservice.guardarInfo(this._ListInfocontable);
      
    }
    this.List.next(this._ListInfocontable);
  } 


}


