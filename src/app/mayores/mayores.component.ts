import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministracionService } from '../administracion.service';
import { Infocontable } from '../administracion/administracion';
import { InfoContableService } from '../info-contable.service';
@Component({
  selector: 'app-mayores',
  templateUrl: './mayores.component.html',
  styleUrls: ['./mayores.component.scss']
})
export class MayoresComponent {
  

  @Input()
  result:number;
  InfoContable:Infocontable[];

  constructor(private AdminService:AdministracionService,private router:Router,private route:ActivatedRoute,private infocontableService:InfoContableService ){

  }
  ngOnInit():void{
    this.route.snapshot.data['infocontable'];
    this.AdminService.getAll().subscribe(data=>{
      this.InfoContable =  data;
    });
 

  }

Total:number ;
  Cotizacion:number;
  Cantidad:number;
  Comision:number;
  Importe:number=1 ;
  firTerInfo='';  
    indice:number;  
  id:Number;
}

