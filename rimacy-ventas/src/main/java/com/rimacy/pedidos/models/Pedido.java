package com.rimacy.pedidos.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.rimacy.clientes.models.Cliente;
import com.rimacy.colaboradores.models.Colaborador;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "pedidos")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 10)
    private String nroGuia;

    @ManyToOne
    @JoinColumn(name = "id_cliente", insertable = false, updatable = false)
    @JsonBackReference
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "id_colaborador", insertable = false, updatable = false)
    @JsonBackReference
    private Colaborador colaborador;

    @Column(name = "id_cliente")
    private Long idCliente;
    @Column(name = "id_colaborador")
    private Long idColaborador;

    private LocalDateTime fecha_ped;
    private LocalDateTime fecha_ent;
    @Column(precision = 8, scale = 2)
    private BigDecimal importe;
    @Column(precision = 8, scale = 2)
    private BigDecimal descuento;
    private boolean contado;
}
