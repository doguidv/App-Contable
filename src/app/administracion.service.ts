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
}
