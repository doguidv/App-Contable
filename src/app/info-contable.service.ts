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



  GetID(indice:number){

    let InfoCont:Infocontable=this._ListInfocontable[indice]
  return  InfoCont;
    // return  this.adminservice.GetId();
  }

  
  UpdateToInfo(indice:number,InfoCont:Infocontable){

    let InfoContModificada= this._ListInfocontable[indice];

      InfoContModificada.Fecha=InfoCont.Fecha;
      InfoContModificada.Detalle=InfoCont.Detalle;
      InfoContModificada.Cantidad=InfoCont.Cantidad;
      InfoContModificada.Comision=InfoCont.Comision;
      InfoContModificada.Importe=InfoCont.Importe;
      InfoContModificada.id_categorias_fk=InfoCont.id_categorias_fk;

    this.adminservice.Actualizar(indice,InfoCont);
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
      item.Cantidad +=  Infocontable.Cantidad;
      item.Importe+= Infocontable.Importe;
      item.Comision+= Infocontable.Comision;
      this.AcumComision =  + 1;
      
    }
  this.List.next(this._ListInfocontable);
  } 

    ppp(Total:number){
      
      let ppp= Total/this.AcumComision;
      return ppp;
    }

AcumComision:number;

}


