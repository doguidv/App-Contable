import { Component, OnInit, Output } from '@angular/core';
import { Infocontable } from './administracion';
import { InfoContableService } from '../info-contable.service';


@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {

  constructor(
    private infocontableService:InfoContableService){
     
   }

    ngOnInit():void{
      this.infocontableService.GetInfo()
      .subscribe(Infocontable => {
        this.Infocontable  = Object.values( Infocontable);

        this.infocontableService.SetInfo(this.Infocontable);

      
      }); 
      
        }


        Infocontable:Infocontable[]=[];

    
    addInfo(){


    this.CostoTotalacum=this.Cantidad*this.Importe;


      let InfoCont= new Infocontable(this.Fecha,this.Detalle,this.Cantidad,this.CostoTotalacum,this.DetallesCosto,this.id_categorias_fk);
      this.infocontableService.addToInfo(InfoCont);
    }
    
    Tipo_Inversion:string;
  Fecha:string;
  Detalle:string;
  Cantidad:number;
  Importe:number;
  CostoTotalacum:number;
  id_categorias_fk:number;
  DetallesCosto:string;

 maxReached( m:string ){
  alert(m);
 }

}
