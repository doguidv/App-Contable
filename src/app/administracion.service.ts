import  {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Infocontable } from './administracion/administracion'



const URL='https://637a13177419b414df99362e.mockapi.io/Infocontable'
const url='http://localhost/AppContable/api/infoContable'



@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
 
  constructor(private http: HttpClient ) { }


  public getAll():Observable<Infocontable[]> {

    return  this.http.get<Infocontable[]>(URL)
  
  }
  public GetId(id:number):Observable<Infocontable[]>{
  return this.http.get<Infocontable[]>(URL)
  }

  guardarInfo(Infocontable:Infocontable[]){

    this.http.post (URL,Infocontable).subscribe({
        next: (v) => console.log('Se Guardo la informacion' + v),
        error: (e) => console.log('Error' + e),
      });
  }

  Actualizar(indice:number,Infocontable:Infocontable){

    let url='https://637a13177419b414df99362e.mockapi.io/Infocontable/'+indice+'.json';

    
    this.http.put (url,Infocontable).subscribe({
      next: (v) => console.log('Info modificada Correctamente' + v),
      error: (e) => console.log('Error' + e),
    });
  }

  
  CalculoTotal (infoContable:Infocontable){

    let  PrecioConComision= infoContable.Importe + infoContable.Comision
     this.ppp= ((PrecioConComision * infoContable.Cantidad) / infoContable.Cantidad);
     this.Total = (PrecioConComision  * infoContable.Cantidad);
     return this.Total 
    }
   
  
  ppp:number;
  Resultado:number
 Total:number;
 
   CalculoResut(Total:number,Cotizacion:number){
     let Resultado
     Resultado=(Cotizacion /  Total)
   }
}
