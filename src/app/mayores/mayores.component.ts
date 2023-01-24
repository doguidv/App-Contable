import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
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

  constructor(private AdminService:AdministracionService,private router:Router,private route:ActivatedRoute,private infocontableService:InfoContableService ){

  }
  ngOnInit():void{
    this.route.snapshot.data['infocontable'];
    this.AdminService.getAll().subscribe(data=>{
      this.InfoContable =  data;
    });
 

  }

CalculoPrecioComision(InfoContable:Infocontable){
  this.PrecioComision=  ((InfoContable.Importe)   +  (InfoContable.Importe*(InfoContable.Comision/100) )  );
  return this.PrecioComision;
}

  CalculoTotal(InfoContable:Infocontable){
    this.CalculoPrecioComision;
    this.Total =  this.PrecioComision *  InfoContable.Cantidad;
  return this.Total;
  }
  
  Calculoppp(Total:number){  
    this.ppp= Total/this.infocontableService.SumaComision;
    return this.ppp;
  }

Resultado(Cotizacion:number){
  this.Calculoppp;
  this.CalculoTotal;
     this.resultado= Cotizacion /  this.ppp;
     this.Cotizacion= Cotizacion;
     return this.resultado;
    }

  PrecioComision:number=100;
  ppp:number=10;
  resultado:number;
  Total:number  =10;
  Cotizacion:number;
  Cantidad:number;
  Comision:number=50/100;
  Importe:number;
  firTerInfo='';  
    
    indice:number;  
  id:Number;

  }

