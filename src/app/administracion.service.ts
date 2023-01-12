import  {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Infocontable } from './administracion/administracion';


const URL='https://637a13177419b414df99362e.mockapi.io/Infocontable'




@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
  [x: string]: any;

  constructor(private http: HttpClient ) { }

  public getAll():Observable<Infocontable[]> {
    
    return  this.http.get<Infocontable[]>(URL)
    .pipe(
      tap(  ( infocontable:Infocontable[] )=>infocontable.forEach(infocontable  =>  infocontable.cantidad= 0 ))
     );
}
  guardarInfo(Infocontable:Infocontable[]){

    this.http.put (URL,Infocontable).subscribe({
        next: (v) => console.log('Se Guardo la informacion' + v),
        error: (e) => console.log('Error' + e),
      });
  }
}
