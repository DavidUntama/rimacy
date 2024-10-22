import { ClienteTipo } from "./clienteTipo";

export interface Cliente {
    id:         number;
    nombres:    string;
    apellidos:  string;
    direccion:  string;
    telefono:   string;
    email:      string;
    ruc:        string;
    ruta:       string;
    clienteTipo:ClienteTipo|null;
}