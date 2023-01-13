export class Infocontable{

    constructor(Fecha: number,Detalle:string,Cantidad:number,Comision:number,Importe:number,id_categorias:number){

        this.Fecha=Fecha,
        this.Detalle=Detalle,
        this.Cantidad=Cantidad,
        this.Comision=Comision,
        this.Importe=Importe,
        this.id_categorias=id_categorias
    }
    
    Fecha:number;
    Detalle:string;
    Cantidad:number;
    Comision:number;
    Importe:number;
    id_categorias: number;
}