import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Infocontable } from '../administracion/administracion';
import { InfoContableService } from '../info-contable.service';

@Component({
  selector: 'app-de-talles-precio',
  templateUrl: './de-talles-precio.component.html',
  styleUrls: ['./de-talles-precio.component.scss']
})
export class DeTallesPrecioComponent {
 


          constructor(private infocontableService:InfoContableService,private route:ActivatedRoute){

          }
       
   Infocontable:Infocontable[]=[];

    ngOnInit():void{
      this.infocontableService.GetInfo()
      .subscribe(Infocontable => {
        this.Infocontable  = Infocontable
      }); 

      this.indice=this.route.snapshot.params['id'];

      let InfoCont:Infocontable=this.infocontableService.GetID(this.indice);
      
      this.DetallesCosto=InfoCont.DetallesCosto;

    }
    
    indice: number;
  DetallesCosto:string;
 
}
