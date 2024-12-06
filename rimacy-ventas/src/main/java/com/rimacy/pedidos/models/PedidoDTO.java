package com.rimacy.pedidos.models;

import lombok.Data;

import java.time.LocalDateTime;
import java.math.BigDecimal;

@Data
public class PedidoDTO {
    private String nroGuia;
    private Long idCliente;
    private Long idColaborador;
    private LocalDateTime fechaPed;
    private LocalDateTime fechaEnt;
    private BigDecimal importe;
    private BigDecimal descuento;
    private boolean contado;
}
