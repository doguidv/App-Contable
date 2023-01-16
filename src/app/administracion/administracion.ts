export class Infocontable{

    constructor(Fecha: string,Detalle:string,Cantidad:number,Comision:number,Importe:number,id_categorias_fk:number){
        this.Fecha=Fecha,
        this.Detalle=Detalle,
        this.Cantidad=Cantidad,
        this.Comision=Comision,
        this.Importe=Importe,
        this.id_categorias_fk=id_categorias_fk
    }

    Fecha:string;
    Detalle:string;
    Cantidad:number;
    Comision:number;
    Importe:number;
    id_categorias_fk:number;
  

}