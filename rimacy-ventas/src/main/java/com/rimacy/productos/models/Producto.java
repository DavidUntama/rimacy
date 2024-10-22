package com.rimacy.productos.models;

import com.rimacy.producto_unidad.models.ProductoUnidad;
import com.rimacy.unidades.models.Unidad;
import jakarta.persistence.*;
import lombok.Data;


import java.math.BigDecimal;
import java.util.Set;

@Data
@Entity
@Table(name = "productos")
public class Producto {
    @Id    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 40)
    private String denominacion;

    @Column(length = 30)
    private String marca;

    @Column(length = 30)
    private String tipo;

    @Column(length = 10)
    private String presentacion;

    @Column(precision = 8, scale = 2)
    private BigDecimal precio;

    private short stock;
    private String foto;
    private String descripcion;

    @Column(columnDefinition = "boolean default true")
    private boolean activo;
    private short orden;
    @ManyToOne
    @JoinColumn(name = "id_unidad", nullable = false) // Clave foránea que referencia la unidad base
    private Unidad unidadBase;
/*
    @OneToMany(mappedBy = "producto")
    Set<ProductoUnidad> productoUnidades;
*/
}
