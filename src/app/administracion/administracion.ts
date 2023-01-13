export class Infocontable{

    constructor(Fecha: number,Detalle:string,Importe:number,id_categorias:number,Cantidad:number){

        this.Fecha=Fecha,
    
        this.Detalle=Detalle,
        
        this.Importe=Importe,
        this.Cantidad=Cantidad,
        this.id_categorias=id_categorias
    }
    
    Fecha:number;
    Detalle:string;
    Importe:number;
    Cantidad:number;
    id_categorias: number;
}