import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {
  @Input()
  contador!: number;
  @Input()
  max!: number;

 @Output()
  contadorChange: EventEmitter<number>=new EventEmitter<number>() ;

  @Output()
  maxReached: EventEmitter<string>= new EventEmitter<string>() ;


  upCantidad():void{
    if(this.contador  < this.max){
      this.contador++;
      this.contadorChange.emit( this.contador);
    }
    else{
      this.maxReached.emit("Se alcanzo el Cupo  maximo"); 
    }
  }
  downCantidad():void{
    if(this.contador>0){
      this.contador--;
      this.contadorChange.emit( this.contador);
    } 
  }
}