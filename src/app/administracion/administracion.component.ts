import { Component, OnInit, Output } from '@angular/core';
import { Infocontable } from './administracion';
import { AdministracionService } from '../administracion.service';
import { InfoContableService } from '../info-contable.service';
import { NgForm } from '@angular/forms';
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {

  constructor(
    private AdministracionService: AdministracionService,private infocontableService:InfoContableService ){
     
   }

@Output ()  ListInfoContable:Infocontable;


  
    ngOnInit():void{
      this.infocontableService.GetInfo()
      .subscribe(Infocontable => {
        this.Infocontable  = Infocontable
      }); 
    }
  
    Infocontable:Infocontable[]=[];


    addInfo(){

      let InfoCont= new Infocontable(this.Fecha,this.Detalle,this.Cantidad,this.Comision,this.Importe,this.id_categorias);
      this.infocontableService.addToInfo(InfoCont);
    }
    
  Fecha:number=0;
  Detalle:string="";
  Cantidad:number=0;
  Comision:number;
  Importe:number=0;
  id_categorias:number=0;
  

 maxReached( m:string ){
  alert(m);
 }

}
