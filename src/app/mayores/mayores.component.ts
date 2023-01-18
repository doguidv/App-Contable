import { Component, Input } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministracionService } from '../administracion.service';
import { Infocontable } from '../administracion/administracion';
import { Categorias } from '../categorias/categorias';
import { InfoContableService } from '../info-contable.service';
@Component({
  selector: 'app-mayores',
  templateUrl: './mayores.component.html',
  styleUrls: ['./mayores.component.scss']
})
export class MayoresComponent {
  
  InfoContable:Infocontable[];
 @Input()ListInfoContable:Infocontable;
 @Input()ListCaracteristicas:Categorias;

  constructor(private AdminService:AdministracionService,private router:Router,private route:ActivatedRoute,private infocontableService:InfoContableService ){}

  ngOnInit():void{

    this.AdminService.getAll().subscribe(data=>{
      this.InfoContable=  data;
    });

  }

  CalculoTotal (){

  let  PrecioSinCom= this.Cantidad *   this.Importe
  let PrecioConCom=  this.Comision + this.Importe
  this.ppp= ((PrecioConCom * this.Cantidad) / this.Cantidad)
  this.Total = (PrecioConCom  * this.Cantidad)
  }
CalculoResut(Total:number){
  
  this.Resultado=(this.Cotizacion /  Total)
}
  ppp:number;
  Resultado:number
  Cotizacion:number;
  
  Total:Number;
  
  Cantidad:number;
  Comision:number;
  Importe:number;
  firTerInfo='';  
    
    indice:number;  
  id:Number;

  }

