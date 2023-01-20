import  {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Categorias } from './categorias/categorias';



const URL='https://62bda336c5ad14c110c37ee2.mockapi.io/api/categorias'
const url='http://localhost/AppContable/api/infoContable'



@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
 
  constructor(private http: HttpClient ) { }


  public getAll():Observable<Categorias[]> {

    return  this.http.get<Categorias[]>(URL)
  
  }
  public GetId(indice:number):Observable<Categorias[]>{
  return this.http.get<Categorias[]>(URL)
  }

  guardarInfo(Infocontable:Categorias[]){

    this.http.post (URL,Infocontable).subscribe({
        next: (v) => console.log('Se Guardo la informacion' + v),
        error: (e) => console.log('Error' + e),
      });
  }

  Actualizar(indice:number,Infocontable:Categorias){

    let url='https://637a13177419b414df99362e.mockapi.io/Infocontable'+indice+'.json';

    
    this.http.put (url,Infocontable).subscribe({
      next: (v) => console.log('Info modificada Correctamente' + v),
      error: (e) => console.log('Error' + e),
    });
  }

  Eliminar(indice:number){

    let url='https://637a13177419b414df99362e.mockapi.io/Infocontable'+indice+'.json';

    this.http.delete (url).subscribe({
      next: (v) => console.log('Info borrada Correctamente' + v),
      error: (e) => console.log('Error' + e),
    });
  }

  
}
