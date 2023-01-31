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
        this.CostoTotalacum  = InfoCont.CostoTotalacum;
        this.DetallesCosto=InfoCont.DetallesCosto;
        
        }


        UpdateInfo(){

          this.Total= (this.CostoTotalacum) +  ( this.Cantidad*this.Cotizacion);
        
           let InfoCont= new Infocontable(this.Fecha,this.Detalle,this.Cantidad,this.Importe,this.CostoTotalacum,this.DetallesCosto,this.Total);
           this.infocontableService.UpdateToInfo(this.indice,InfoCont);
   
        }


        
      EliminaInfo(){
        this.infocontableService.EliminarInfo(this.indice);
       }

      CostoUnit():void{
          this.costoUnit= (this.CostoTotalacum/this.Cantidad);
      }


      CalculoResul():void{
        if(this.Cotizacion  > -1 ){

          this.result =  -1 * ((this.Cotizacion/this.costoUnit))-1;
          this.resultChange.emit( this.result);
        }
      }
      
   
Total:number;
      CostoTotalacum:number;
  costoUnit:number;
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
