import { Component, OnInit, Output } from '@angular/core';
import { Infocontable } from './administracion';
import { AdministracionService } from '../administracion.service';
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
    private AdministracionService: AdministracionService,private infocontableService:InfoContableService,private CategService:CategoriasService ){
     
   }

  
    ngOnInit():void{
      this.infocontableService.GetInfo()
      .subscribe(Infocontable => {
        this.Infocontable  = Infocontable
      }); 
      
      this.CategService.getAll()
      .subscribe(Categorias => {
        this.Categorias  = Categorias
      }); 
        }


        
        Categorias:Categorias[]=[]
          Infocontable:Infocontable[]=[];


    addInfo(){

      let InfoCont= new Infocontable(this.Fecha,this.Detalle,this.Cantidad,this.Comision,this.Importe,this.id_categorias_fk);
      this.infocontableService.addToInfo(InfoCont);
    }
    Tipo_Inversion:string;
  Fecha:string;
  Detalle:string;
  Cantidad:number;
  Comision:number;
  Importe:number;
  id_categorias_fk:number;
  

 maxReached( m:string ){
  alert(m);
 }

}
