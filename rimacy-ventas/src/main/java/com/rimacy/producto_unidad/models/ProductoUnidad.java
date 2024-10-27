package com.rimacy.producto_unidad.models;

import com.rimacy.productos.models.Producto;
import com.rimacy.unidades.models.Unidad;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "producto_unidad")
@Data
public class ProductoUnidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "id_unidad", nullable = false)
    private Unidad unidad;

    /*private boolean minima;
    private int stock;
    */
}
