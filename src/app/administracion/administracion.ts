export class Infocontable{

    constructor(Fecha: string,Detalle:string,Cantidad:number,CostoTotalacum:number,DetallesCosto:string,id_categorias_fk:number){
        this.Fecha=Fecha,
        this.Detalle=Detalle,
        this.Cantidad=Cantidad,
        this.CostoTotalacum=CostoTotalacum,
        this.DetallesCosto=DetallesCosto,
        this.id_categorias_fk=id_categorias_fk
    }
    DetallesCosto:string;
    Fecha:string;
    Detalle:string;
    Cantidad:number;
    CostoTotalacum:number;
    id_categorias_fk:number;
  

}