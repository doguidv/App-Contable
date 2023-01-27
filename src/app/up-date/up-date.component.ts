import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

@Output()
resultChange: EventEmitter<number>  = new EventEmitter<number>() ;



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
        this.Importe  = InfoCont.Importe;
        this.DetallesCosto=InfoCont.DetallesCosto;
        this.id_categorias_fk=InfoCont.id_categorias_fk;
        
        }


        UpdateInfo(){

           let InfoCont= new Infocontable(this.Fecha,this.Detalle,this.Cantidad,this.Importe,this.DetallesCosto,  this.id_categorias_fk);
           this.infocontableService.UpdateToInfo(this.indice,InfoCont);
   
        }
      EliminaInfo(){
        this.infocontableService.EliminarInfo(this.indice);
       }

      CostoTotal():void{
      this.Total=          this.Importe *    this.Cantidad/this.infocontableService.acumCant;
      }

      CostoUnit():void{
          this.costoUnit= (this.Total/this.Cantidad);
      }


      CalculoResul():void{
        if(this.Cotizacion>0){

          this.result=   ((this.Cotizacion/this.costoUnit))-1;
          this.resultChange.emit( this.result);
        }
      }


  costoUnit:number;
    CostoTotalAcum:number;
      Total:number;
      result:number;
      Cotizacion:number;
      Fecha:string;
      Detalle:string="";
      Cantidad:number;
  Importe:number;
  DetallesCosto:string;
  id_categorias_fk:number;
    indice:number;

 maxReached( m:string ){
  alert(m);
 }
}
