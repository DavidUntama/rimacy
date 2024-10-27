package com.rimacy.producto_unidad.services;

import com.rimacy.producto_unidad.models.ProductoUnidad;

import java.util.List;

public interface ProductoUnidadService {
    public List<ProductoUnidad> getUnitsByProduct(int idProd);
    public void save(ProductoUnidad productoUnidad);
}
