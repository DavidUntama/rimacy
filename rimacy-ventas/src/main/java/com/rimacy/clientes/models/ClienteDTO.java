package com.rimacy.clientes.models;

import lombok.Data;

@Data
public class ClienteDTO {
    private long id;
    private String nombres;
    private String apellidos;
    private String direccion;
}