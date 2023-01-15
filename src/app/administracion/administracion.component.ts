import { Component, OnInit, Output } from '@angular/core';
import { Infocontable } from './administracion';
import { AdministracionService } from '../administracion.service';
import { InfoContableService } from '../info-contable.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {

  constructor(
    private AdministracionService: AdministracionService,private infocontableService:InfoContableService ){
     
   }

  
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
  Fecha:string;
  Detalle:string;
  Cantidad:number;
  Comision:number;
  Importe:number;
  id_categorias:number;
  

 maxReached( m:string ){
  alert(m);
 }

}
