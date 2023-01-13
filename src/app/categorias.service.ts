import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Categorias } from './categorias/categorias';



const URL='http://localhost:80/ApiContable/categorias'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient ) { }

  public getAll():Observable<Categorias[]> {
    
    return  this.http.get<Categorias[]>(URL)
    .pipe(
      tap(  ( infocontable:Categorias[] )=>infocontable.forEach(Categorias  =>  Categorias ))
     );
}
  guardarInfo(Categorias:Categorias[]){

    this.http.put (URL,Categorias).subscribe({
        next: (v) => console.log('Se Guardo la informacion' + v),
        error: (e) => console.log('Error' + e),
      });
  }
}
