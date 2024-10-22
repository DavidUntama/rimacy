package com.rimacy.productos.services;

import com.rimacy.productos.models.Producto;

import java.util.List;

public interface ProductoService {
    public List<Producto> getAllProductos();
    public Producto getProductoById(Long id);
    public void delProducto(Long id);
    public Producto saveProducto(Producto producto);
}
