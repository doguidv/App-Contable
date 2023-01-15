import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Infocontable } from '../administracion/administracion';
import { InfoContableService } from '../info-contable.service';

@Component({
  selector: 'app-up-date',
  templateUrl: './up-date.component.html',
  styleUrls: ['./up-date.component.scss']
})
export class UpDateComponent {

  constructor(
    private infocontableService:InfoContableService,private route:ActivatedRoute ){
     
   }
  
   Infocontable:Infocontable[]=[];

  
    ngOnInit():void{
      this.infocontableService.GetInfo()
      .subscribe(Infocontable => {
        this.Infocontable  = Infocontable
      }); 
      this.indice=this.route.snapshot.params['id'];


      let InfoCont:Infocontable=this.infocontableService.GetID(this.indice);

      this.Fecha=InfoCont.Fecha;

      this.Detalle=InfoCont.Detalle;
      this.Cantidad=InfoCont.Cantidad;
      this.Comision=InfoCont.Comision;
      this.Importe=InfoCont.Importe;
      this.id_categorias=InfoCont.id_categorias;
      
        }


        UpdateInfo(){

           let InfoCont= new Infocontable(this.Fecha,this.Detalle,this.Cantidad,this.Comision,this.Importe,this.id_categorias);
       this.infocontableService.UpdateToInfo(this.indice,InfoCont);
    }
    
  Fecha:string;
  Detalle:string="";
  Cantidad:number=0;
  Comision:number;
  Importe:number=0;
  id_categorias:number=0;
    indice:number;

 maxReached( m:string ){
  alert(m);
 }
}
