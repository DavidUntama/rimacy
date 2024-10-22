package com.rimacy.Precios.models;

import com.rimacy.clienteTipo.models.ClienteTipo;
import com.rimacy.productos.models.Producto;
import com.rimacy.unidades.models.Unidad;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
public class Precios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "id_unidad", nullable = false)
    private Unidad unidad;

    @ManyToOne
    @JoinColumn(name = "id_cliente_tipo", nullable = false)
    private ClienteTipo clienteTipo;

    @Column(precision = 6, scale = 2)
    private BigDecimal precio;

    private Date inicio;

    private Date fin;

}
