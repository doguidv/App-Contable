import { Component, Output } from '@angular/core';
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
export class AdministracionComponent  {




  constructor(
    private AdministracionService: AdministracionService,private infocontableService:InfoContableService ){
      
      this.Infocontable=this.infocontableService._AddInfo;
   }

@Output ()  ListInfoContable:Infocontable;


  Fecha:number=0;
  Detalle:string="";
  Cantidad:number=0;
  Importe:number=0;
  id_categorias:number=0;
  

  
    ngOnInit():void{
      this.infocontableService.GetInfo()
      .subscribe(Infocontable => {
        this.Infocontable  = Infocontable
      }); 
    }
  
    Infocontable:Infocontable[]=[];


    addInfo(){

      let InfoCont= new Infocontable(this.Fecha,this.Detalle,this.Cantidad,this.Importe,this.id_categorias);

      this.infocontableService.addToInfo(InfoCont);
      this.AdministracionService.guardarInfo(this.Infocontable);

    }
    
 maxReached( m:string ){
  alert(m);
 }

}
