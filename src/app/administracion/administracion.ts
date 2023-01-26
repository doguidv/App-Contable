export class Infocontable{

    constructor(Fecha: string,Detalle:string,Cantidad:number,Importe:number,DetallesCosto:string,id_categorias_fk:number){
        this.Fecha=Fecha,
        this.Detalle=Detalle,
        this.Cantidad=Cantidad,
        this.Importe=Importe,
        this.DetallesCosto=DetallesCosto,
        this.id_categorias_fk=id_categorias_fk
    }
    DetallesCosto:string;
    Fecha:string;
    Detalle:string;
    Cantidad:number;
    Importe:number;
    id_categorias_fk:number;
  

}