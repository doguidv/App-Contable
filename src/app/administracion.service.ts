import  {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Infocontable } from './administracion/administracion'
import { LoginService } from './login.service';



const URL='https://appcontable-c8190-default-rtdb.firebaseio.com/'
const url='http://localhost/AppContable/api/infoContable'



@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
 
  constructor(private http: HttpClient,private loginservice:LoginService ) { }


  public getAll():Observable<Infocontable[]> {
    
    const token=this.loginservice.getIdtoken();

    return  this.http.get<Infocontable[]>('https://appcontable-c8190-default-rtdb.firebaseio.com/datos.json?auth='+token)
  
  }
  public GetId(indice:number):Observable<Infocontable[]>{
  return this.http.get<Infocontable[]>('https://appcontable-c8190-default-rtdb.firebaseio.com/datos.json')
  }

  guardarInfo(Infocontable:Infocontable[]){

    const token=this.loginservice.getIdtoken();
    this.http.put ('https://appcontable-c8190-default-rtdb.firebaseio.com/datos.json?auth='+token,Infocontable).subscribe({
        next: (v) => console.log('Se Guardo la informacion' + v),
        error: (e) => console.log('Error' + e),
      });
  }

  Actualizar(indice:number,Infocontable:Infocontable){

    const token=this.loginservice.getIdtoken();

    const url='https://appcontable-c8190-default-rtdb.firebaseio.com/datos/'+token+indice +'.json';


    this.http.put (url,Infocontable).subscribe({
        next: (v) => console.log('Se Guardo la informacion' + v),
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
