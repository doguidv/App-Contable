import { Component, OnInit } from '@angular/core';
import { Infocontable } from './administracion';
import { InfoContableService } from '../info-contable.service';
import { CategoriasService } from '../categorias.service';
import { Categorias } from '../categorias/categorias';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {

  constructor(
    private infocontableService:InfoContableService,private CategService:CategoriasService ){
     
   }

  
    ngOnInit():void{
      this.infocontableService.GetInfo()
      .subscribe(Infocontable => {
        this.Infocontable  = Object.values( Infocontable);

        this.infocontableService.SetInfo(this.Infocontable);

      
      }); 
      
      
      this.CategService.getAll()
      .subscribe(Categorias => {
        this.Categorias  = Categorias
      }); 
        }

        Categorias:Categorias[]=[];

        Infocontable:Infocontable[]=[];

    
    addInfo(){

      let InfoCont= new Infocontable(this.Fecha,this.Detalle,this.Cantidad,this.Importe,this.DetallesCosto,this.id_categorias_fk);
      this.infocontableService.addToInfo(InfoCont);
    }
    
    PrecioDetalles:string;
    Tipo_Inversion:string;
  Fecha:string;
  Detalle:string;
  Cantidad:number;
  Importe:number;
  id_categorias_fk:number;
  DetallesCosto:string;

 maxReached( m:string ){
  alert(m);
 }

}
