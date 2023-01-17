import { Pipe, PipeTransform } from '@angular/core';
import { Infocontable } from '../administracion/administracion';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  Infocontable:Infocontable[]=[];
 


  transform(value: any ,...arg: any[]): any {

    const     ArrayInfo:Infocontable[]=[];
    if(  arg.length< 3) return value;
    for(const Buscar  of value){
//Cambiar id_categorias_fk por Tipo_especie
        if (Buscar.Cantidad.indexOf(arg)>-1){
          ArrayInfo.push(Buscar);
        };
    };
          return ArrayInfo;
  }

}
