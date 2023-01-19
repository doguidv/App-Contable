import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Categorias } from './categorias/categorias';



const URL='/ApiContable/categorias'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {


  Categorias:Categorias[]=[];
  
  constructor(private http: HttpClient ) { }

  public getAll():Observable<Categorias[]> {
    
    
    return  this.http.get<Categorias[]>(URL)
    .pipe(
      tap(  ( Categorias:Categorias[] )=>Categorias.forEach(Categorias  =>  Categorias ))
     );
}
  guardarCategorias(Categorias:Categorias[]){

    this.http.post (URL,Categorias).subscribe({
        next: (v) => console.log('Se Guardo la informacion' + v),
        error: (e) => console.log('Error' + e),
      });
  }
}
