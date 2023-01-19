import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdministracionService } from './administracion.service';
import { Infocontable } from './administracion/administracion';
@Injectable({
  providedIn: 'root'
})

export class InfoContableService {
  constructor(private adminservice:AdministracionService ) { }

  Infocontable:Infocontable[]=[];



  
  SetInfo(InfoCont:Infocontable[]){
    this.Infocontable =  InfoCont;
  
  }
  
  GetInfo(){
      
    return this.adminservice.getAll();
  }

  GetID(indice:number){

    let InfoCont:Infocontable=this.Infocontable[indice]
  return  InfoCont;
    // return  this.adminservice.GetId();
  }

  
  UpdateToInfo(indice:number,InfoCont:Infocontable){

    let InfoContModificada= this.Infocontable[indice];

    InfoContModificada.Fecha=InfoCont.Fecha;
    InfoContModificada.Detalle=InfoCont.Detalle;
    InfoContModificada.Cantidad=InfoCont.Cantidad;
    InfoContModificada.Comision=InfoCont.Comision;
    InfoContModificada.Importe=InfoCont.Importe;
    InfoContModificada.id_categorias_fk=InfoCont.id_categorias_fk;

    this.adminservice.Actualizar(indice,InfoCont);
  }


  EliminarInfo(indice:number){

  // this.Infocontable.splite(indice,1);

    this.adminservice.Eliminar(indice);

    if(this.Infocontable!=null) this.adminservice.guardarInfo(this.Infocontable);
  }
  addToInfo(Infocontable:Infocontable){

     this.Infocontable.find((v1) =>v1.Fecha == Infocontable.Fecha);
    
      this.Infocontable.push(Infocontable);    
    this.adminservice.guardarInfo(this.Infocontable);
  
  }
  

}


