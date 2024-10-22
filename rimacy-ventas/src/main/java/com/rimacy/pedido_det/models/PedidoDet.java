package com.rimacy.pedido_det.models;

import com.rimacy.pedidos.models.Pedido;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
@Table(name = "pedidos_det")
public class PedidoDet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "idPedido")
    private Pedido pedido;

    private int idProducto;
    private int idUnidad;

    private int cantidad;
    @Column(precision = 6, scale = 2)
    private BigDecimal costo;
}
