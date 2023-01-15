export class Infocontable{

    constructor(Fecha: number,Detalle:string,Cantidad:number,Comision:number,Importe:number,id_categorias:number){

        this.Fecha=Fecha,
        this.Detalle=Detalle,
        this.Cantidad=Cantidad,
        this.Comision=Comision,
        this.Importe=Importe,
        this.id_categorias=id_categorias
    }
    
    Fecha:number=0;
    Detalle:string="";
    Cantidad:number=0;
    Comision:number=0;
    Importe:number=0;
    id_categorias:number=0;
  

}