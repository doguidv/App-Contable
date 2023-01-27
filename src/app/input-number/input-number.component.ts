import { Component, EventEmitter, Input, Output } from '@angular/core';

import { InfoContableService } from '../info-contable.service';
import { Infocontable } from '../administracion/administracion';
@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {

  InfoContable:Infocontable[];

  
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
  Importe:number=10;
}
