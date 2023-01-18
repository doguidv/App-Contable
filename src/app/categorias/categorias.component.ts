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
  
Categorias:Categorias[]=[

new Categorias ("Acciones"),
new Categorias ("Bonos"),
new Categorias ("Plazo Fijo"),
];

  id_categorias:number=1;
  Tipo_Inversion:string;  
 



  constructor( private CategoriasService:CategoriasService,private AddCateg:AddCategoriasService){

  }
  
    ngOnInit():void{
      this.CategoriasService.getAll()
      .subscribe(Categorias => this.Categorias  = Categorias); 
    }

    addCateg(){
      let MiCateg= new Categorias  ( this.Tipo_Inversion);
         this.AddCateg.addToCategorias(MiCateg);
  }
    
 maxReached( m:string ){
  alert(m);
 }

}
