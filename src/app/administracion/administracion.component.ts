import { Component, OnInit } from '@angular/core';
import { Infocontable } from './administracion';
import { InfoContableService } from '../info-contable.service';
import { empty } from 'rxjs';


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
   if  ( this.Fecha==null || this.Cantidad==null || this.Detalle==null || this.Importe==null ){

    this.msj= ("Debe Completar los campos para poder guardar")

   }else{
    this.CostoTotalacum =  ( this.Cantidad*this.Importe);
    let InfoCont= new Infocontable(this.Fecha,this.Detalle,this.Cantidad,this.Importe,this.CostoTotalacum,this.DetallesCosto,this.Total);
    this.infocontableService.addToInfo(InfoCont);
   }
    }

    msj:string;
    Tipo_Inversion:string;
  Fecha:string;
  Detalle:string;
  Cantidad:number;
  Importe:number;
  CostoTotalacum:number;
  DetallesCosto:string;
Total:number=0;
 maxReached( m:string ){
  alert(m);
 }

}
