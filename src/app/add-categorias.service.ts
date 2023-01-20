import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoriasService } from './categorias.service';
import { Categorias } from './categorias/categorias';



@Injectable({
  providedIn: 'root'
})

export class AddCategoriasService {
  constructor(private Categservice:CategoriasService) { }

  Categorias:Categorias[]=[];



  
  SetInfo(InfoCat:Categorias[]){
    this.Categorias =  InfoCat;
  
  }
  
  GetInfo(){
      
    return this.Categservice.getAll();
  }



  GetID(indice:number){

    let InfoCont:Categorias=this.Categorias[indice]
  return  InfoCont;
    // return  this.adminservice.GetId();
  }

  
  UpdateToInfo(indice:number,InfoCont:Categorias){

    let InfoContModificada= this.Categorias[indice];

      InfoContModificada.Tipo_Inversion=InfoCont.Tipo_Inversion;
    this.Categservice.Actualizar(indice,InfoCont);
  }


  EliminarInfo(indice:number){

   this.Categorias.splice(indice,1);

    if(this.Categorias!=null) this.Categservice.Eliminar (indice);
  }

  addToInfo(Categorias:Categorias){

     this.Categorias.find((v1) =>v1.Tipo_Inversion == Categorias.Tipo_Inversion);
    
      this.Categorias.push({... Categorias});    
    this.Categservice.guardarInfo(this.Categorias);
  
  }
  

}


