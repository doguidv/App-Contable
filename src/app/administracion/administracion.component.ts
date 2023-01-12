import { Component, Output } from '@angular/core';
import { Infocontable } from './administracion';
import { AdministracionService } from '../administracion.service';
import { InfoContableService } from '../info-contable.service';
@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent {

@Output ()  ListInfoContable:Infocontable;
  
Infocontable:Infocontable[]=[];


  Fecha:number= 1/1/2023;
  mensaje="";
  registrado=false;
  Detalle:string="hola";
  Importe:number=1;
  cantidad:number;
  id_categorias:number=1;
  



  constructor(
    private AdministracionService: AdministracionService,private infocontable:InfoContableService ){
    
   }
  
    ngOnInit():void{
      this.AdministracionService.getAll()
      .subscribe(Infocontable => this.Infocontable  = Infocontable); 
    }

    addInfo(){
      let MiInfo= new Infocontable  (this.Fecha, this.Detalle,  this.Importe, this.id_categorias,this.cantidad);
    //  this.
      this.infocontable.addToInfo(MiInfo);
      this.registrado=true;
      this.mensaje="Informacion registrada"
    }
    
 maxReached( m:string ){
  alert(m);
 }

}
