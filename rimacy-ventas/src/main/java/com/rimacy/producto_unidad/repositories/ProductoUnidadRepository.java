package com.rimacy.producto_unidad.repositories;

import com.rimacy.producto_unidad.models.ProductoUnidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductoUnidadRepository extends JpaRepository<ProductoUnidad, Integer> {
    @Query("SELECT pu FROM ProductoUnidad pu WHERE pu.unidad.cantidad>1 and pu.producto.id = :idProducto")
    //List<ProductoUnidad> findUnidadIdsByProductoId(@Param("idProducto") Integer idProducto);
    //@Query("SELECT pu.producto.denominacion, pu.unidad.nombre FROM ProductoUnidad pu WHERE pu.producto.id = :idProducto")
    List<ProductoUnidad> findUnidadIdsByProductoId(@Param("idProducto") Integer idProducto);

}
