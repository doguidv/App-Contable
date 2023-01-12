export class Infocontable{

    constructor(Fecha: number,Detalle:string,Importe:number,id_categorias:number){

        this.Fecha=Fecha,
    
        this.Detalle=Detalle,
        
        this.Importe=Importe,
        
        this.id_categorias=id_categorias
    }
    
    Fecha:number;
    Detalle:string;
    Importe:number;
    id_categorias: number;
}