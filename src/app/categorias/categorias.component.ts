import { Component, Output } from '@angular/core';
import { Categorias } from './categorias';
import { CategoriasService } from '../categorias.service';
import { AddCategoriasService } from '../add-categorias.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

@Output ()  ListCategorias:Categorias;
  
Categorias:Categorias[]=[];

  id_categorias:number=1;
  Tipo_Inversion:string="Acciones";  
  mensaje="";
  registrado=false;



  constructor( private CategoriasService:CategoriasService,private AddCateg:AddCategoriasService){

  }
  
    ngOnInit():void{
      this.CategoriasService.getAll()
      .subscribe(Categorias => this.Categorias  = Categorias); 
    }

    addCateg(){
      let MiCateg= new Categorias  ( this.Tipo_Inversion);
    //  this.
      this.AddCateg.addToInfo(MiCateg);
      this.registrado=true;
      this.mensaje="Informacion registrada"
    }
    
 maxReached( m:string ){
  alert(m);
 }

}
