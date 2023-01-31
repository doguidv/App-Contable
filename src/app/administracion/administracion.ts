export class Infocontable{

    constructor(Fecha: string,Detalle:string,Cantidad:number,Importe:number,CostoTotalacum:number,DetallesCosto:string,Total:number){
        this.Fecha=Fecha,
        this.Detalle=Detalle,
        this.Cantidad=Cantidad,
        this.Importe=Importe,
       this.CostoTotalacum=CostoTotalacum,
        this.DetallesCosto=DetallesCosto
        this.Total=Total;
    }
    DetallesCosto:string;
    Fecha:string;
    Detalle:string;
    Cantidad:number;
    CostoTotalacum:number;
    Importe:number;
    Total:number;
}