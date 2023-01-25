import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Infocontable } from '../administracion/administracion';
import { InfoContableService } from '../info-contable.service';
@Component({
  selector: 'app-up-date',
  templateUrl: './up-date.component.html',
  styleUrls: ['./up-date.component.scss']
})
export class UpDateComponent implements OnInit {
  

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
        this.DetallesCosto=InfoCont.DetallesCosto;
        this.id_categorias_fk=InfoCont.id_categorias_fk;
        
        }


        UpdateInfo(){

           let InfoCont= new Infocontable(this.Fecha,this.Detalle,this.Cantidad,this.Comision,this.Importe,this.DetallesCosto,  this.id_categorias_fk);
           this.infocontableService.UpdateToInfo(this.indice,InfoCont);
   
        }
      EliminaInfo(){
        this.infocontableService.EliminarInfo(this.indice);
        
      }
  Fecha:string;
  Detalle:string="";
  Cantidad:number;
  Comision:number;
  Importe:number;
  DetallesCosto:string;

  id_categorias_fk:number;
    indice:number;

 maxReached( m:string ){
  alert(m);
 }
}
