import  {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Categorias } from './categorias/categorias';



const URL='https://appcontable-f4225-default-rtdb.firebaseio.com/'
const url='http://localhost/AppContable/api/'



@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
 
  constructor(private http: HttpClient ) { }


  public getAll():Observable<Categorias[]> {

    return  this.http.get<Categorias[]>('https://appcontable-f4225-default-rtdb.firebaseio.com/datos.json')
  
  }
  public GetId(indice:number):Observable<Categorias[]>{
  return this.http.get<Categorias[]>(URL)
  }

  guardarInfo(Categorias:Categorias[]){

    this.http.put ('https://appcontable-f4225-default-rtdb.firebaseio.com/datos.json',Categorias).subscribe({
        next: (v) => console.log('Se Guardo la informacion' + v),
        error: (e) => console.log('Error' + e),
      });
  }

  Actualizar(indice:number,Categorias:Categorias){

    let url='https://appcontable-f4225-default-rtdb.firebaseio.com/datos'+indice+'.json';

    
    this.http.put (url,Categorias).subscribe({
      next: (v) => console.log('Info modificada Correctamente' + v),
      error: (e) => console.log('Error' + e),
    });
  }

  Eliminar(indice:number){

    let url='https://appcontable-f4225-default-rtdb.firebaseio.com/datos'+indice+'.json';

    this.http.delete (url).subscribe({
      next: (v) => console.log('Info borrada Correctamente' + v),
      error: (e) => console.log('Error' + e),
    });
  }

  
}
