import { Producto } from "./producto";
import { Unidad } from "./unidad";

export interface ProductoUnidad {
    id: number;
    producto: Producto;
    unidad: Unidad
}