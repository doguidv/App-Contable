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


  CalculoTotal(InfoContable:Infocontable){

    let PrecioComision =((InfoContable.Importe)+(InfoContable.Importe*(InfoContable.Comision/100) )  );
    this.Total =  PrecioComision *  InfoContable.Cantidad;
    let ppp  = this.infocontableService.ppp(this.Total);
  this.ppp  = ppp;
  }



  ppp:number;
  resultado:number;
  Total:number;
  Cotizacion:number;
  Cantidad:number;
  Comision:number;
  Importe:number;
  firTerInfo='';  
    
    indice:number;  
  id:Number;

  }

