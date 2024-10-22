import { Unidad } from "./unidad";

export interface Producto {
    id:           number;
    denominacion: string;
    marca:        string;
    tipo:         string;
    presentacion: string;
    precio:       number;
    stock:        number;
    foto:         string;
    descripcion:  string;
    activo:       boolean;
    orden:        number;
    unidadBase:   Unidad|null;
}

