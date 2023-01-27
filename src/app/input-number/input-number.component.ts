import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Infocontable } from '../administracion/administracion';
import { InfoContableService } from '../info-contable.service';
@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {
  InfoContable:Infocontable[];

  
  constructor(
    private infocontableService:InfoContableService){
     
   }

  
    ngOnInit():void{
      this.infocontableService.GetInfo()
      .subscribe(Infocontable => {
        this.InfoContable  = Object.values( Infocontable);

      
      }); 
      
        }
 @Input()
  result: number;
 
 @Output()
  resultChange: EventEmitter<number>  = new EventEmitter<number>() ;

  @Output()
  maxReached: EventEmitter<string>  = new EventEmitter<string>() ;


  Import(InfoContable:Infocontable):void{
  this.Importe= InfoContable.Importe;
return ;
}
  CalculoResul():void{
    if(this.Cotizacion>0){
      this.result=this.Importe/this.Cotizacion;
      this.resultChange.emit( this.result);
    }
    else{
      this.maxReached.emit("Se alcanzo el Cupo  maximo"); 
    }
  }
  Cotizacion:number;
  Importe:number=1;
}
