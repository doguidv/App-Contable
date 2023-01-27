import  {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Infocontable } from './administracion/administracion'



const URL='https://appcontable-c8190-default-rtdb.firebaseio.com/'
const url='http://localhost/AppContable/api/infoContable'



@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
 
  constructor(private http: HttpClient ) { }


  public getAll():Observable<Infocontable[]> {

    return  this.http.get<Infocontable[]>('https://appcontable-c8190-default-rtdb.firebaseio.com/datos.json')
  
  }
  public GetId(indice:number):Observable<Infocontable[]>{
  return this.http.get<Infocontable[]>('https://appcontable-c8190-default-rtdb.firebaseio.com/datos.json')
  }

  guardarInfo(Infocontable:Infocontable[]){

    this.http.put ('https://appcontable-c8190-default-rtdb.firebaseio.com/datos.json',Infocontable).subscribe({
        next: (v) => console.log('Se Guardo la informacion' + v),
        error: (e) => console.log('Error' + e),
      });
  }

  Actualizar(indice:number,Infocontable:Infocontable){

    let url='https://appcontable-c8190-default-rtdb.firebaseio.com/datos/'+indice+'.json';

    this.http.put (url,Infocontable).subscribe({
      next: (v) => console.log('Info modificada Correctamente' + v),
      error: (e) => console.log('Error' + e),
    });
  }

  Eliminar(indice:number){

    let url='https://appcontable-c8190-default-rtdb.firebaseio.com/datos/'+indice+'.json';

    this.http.delete (url).subscribe({
      next: (v) => console.log('Info borrada Correctamente' + v),
      error: (e) => console.log('Error' + e),
    });
  }

}
