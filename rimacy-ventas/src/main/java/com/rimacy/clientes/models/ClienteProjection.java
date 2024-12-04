package com.rimacy.clientes.models;

import lombok.Data;

public interface ClienteProjection {
    Long getId();
    String getNombres();
    String getApellidos();
    String getDireccion();
}
