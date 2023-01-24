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
}

  CalculoTotal(InfoContable:Infocontable){
    
    this.Total =  this.PrecioComision *  InfoContable.Cantidad;
  return this.Total;
  }
  
  Calculoppp(Total:number){  
    this.ppp= (Total / this.infocontableService.SumaComision);
    return this.ppp;
  }

Resultado(Cotizacion:number){
    this.Cotizacion= Cotizacion;
     this.resultado= (this.Cotizacion /  this.ppp);
     
     return this.resultado;
    }

  PrecioComision:number;
  ppp:number;
  resultado:number;
  Total:number ;
  Cotizacion:number;
  Cantidad:number;
  Comision:number;
  Importe:number;
  firTerInfo='';  
    
    indice:number;  
  id:Number;

  }

