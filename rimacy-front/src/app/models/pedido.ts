export interface Pedido {
    id: number;
    nroGuia: string;
    idCliente: number;
    idColaborador: number;
    fechaPed: string;
    fechaEnt: string;
    importe: number;
    descuento: number;
    contado: boolean;
}