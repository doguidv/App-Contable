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
      InfoContModificada.CostoTotalacum=  InfoCont.CostoTotalacum;
      InfoContModificada.DetallesCosto= InfoCont.DetallesCosto;
      InfoContModificada.Total= InfoCont.Total;
      
    this.adminservice.Actualizar(indice,InfoContModificada);
  }

  EliminarInfo(indice:number){

   this._ListInfocontable.splice(indice,1);

   this.adminservice.Eliminar(indice);

   if(this._ListInfocontable!=null)   this.adminservice.guardarInfo(this._ListInfocontable);
  }


  AgregarInfo(Infocontable: Infocontable){
    let item = this._ListInfocontable.find((v1) =>v1.Detalle == Infocontable.Detalle);
    if(!item){
      this.addInfoToList(Infocontable);
    } else {
      this.updateInfo(item, Infocontable);
    }
    this.List.next(this._ListInfocontable);
  }
  
  addInfoToList(Infocontable: Infocontable){
    this._ListInfocontable.push({...Infocontable});
    this.adminservice.guardarInfo(this._ListInfocontable);
  }
  
  updateInfo(item: Infocontable, Infocontable: Infocontable){
    item.Fecha =  Infocontable.Fecha;
    item.Cantidad +=  Infocontable.Cantidad;
    item.CostoTotalacum  +=  Infocontable.CostoTotalacum;
    this.adminservice.guardarInfo(this._ListInfocontable);
  }
  
  showResultsView(){
    // Crear una copia de la lista para trabajar con ella
    const listCopy = [...this._ListInfocontable];
  
    // Realizar los cálculos necesarios
    const resultados = listCopy.reduce((acumulador, item) => {
      acumulador.cantidadTotal += item.Cantidad;
      acumulador.importeTotal += item.Importe;
      acumulador.costoTotalAcumulado += item.CostoTotalacum;
      acumulador.total += item.Total;
      return acumulador;
    }, {cantidadTotal: 0, importeTotal: 0, costoTotalAcumulado: 0, total: 0});
  
    // Retornar los resultados y la lista
    return {resultados, listCopy};
  }
}  


