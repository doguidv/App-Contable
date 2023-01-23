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


  CalculoTotal(){
    this.PrecioComision =     ((this.ListInfoContable.Importe)   +  (this.ListInfoContable.Importe*(this.ListInfoContable.Comision/100) )  );

    this.Total =  this.PrecioComision *  this.ListInfoContable.Cantidad;
    let ppp  = this.infocontableService.ppp(this.Total);
    this.ppp  = ppp;
    this.Resultado();
  }

Resultado(){
     this.resultado= this.Cotizacion /  this.ppp;
     
}

  PrecioComision:number=20;
  ppp:number;
  resultado:number;
  Total:number  = 1;
  Cotizacion:number;
  Cantidad:number;
  Comision:number;
  Importe:number;
  firTerInfo='';  
    
    indice:number;  
  id:Number;

  }

