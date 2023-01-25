export class Infocontable{

    constructor(Fecha: string,Detalle:string,Cantidad:number,Comision:number,Importe:number,DetallesCosto:string,id_categorias_fk:number){
        this.Fecha=Fecha,
        this.Detalle=Detalle,
        this.Cantidad=Cantidad,
        this.Comision=Comision,
        this.Importe=Importe,
        DetallesCosto=DetallesCosto,
        this.id_categorias_fk=id_categorias_fk
    }
    DetallesCosto:string
    Fecha:string;
    Detalle:string;
    Cantidad:number;
    Comision:number;
    Importe:number;
    id_categorias_fk:number;
  

}