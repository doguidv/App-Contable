import { Component, Input } from '@angular/core';
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
    this.route.snapshot.data['infocontable'];
    this.AdminService.getAll().subscribe(data=>{
      this.InfoContable=  data;
    });
  

  }

Calculoppp(infoContable:Infocontable){
  
  let  PrecioConComision= infoContable.Importe + infoContable.Comision;
  this.ppp= ((PrecioConComision * infoContable.Cantidad) / infoContable.Cantidad);
  return this.ppp;
}

  CalculoTotal (PrecioConComision:number,infoContable:Infocontable){
      this.Total = (PrecioConComision  * infoContable.Cantidad);
     return this.Total; 
    }
  CalculoResut(Total:number,Cotizacion:number){
    this.Resultado=(Cotizacion /  Total);
      return this.Resultado;
    }

    Resultado:number;

    ppp:number;
    
    Total:number;

  Cotizacion:number;
  Cantidad:number;
  Comision:number;
  Importe:number;
  firTerInfo='';  
    
    indice:number;  
  id:Number;

  }

