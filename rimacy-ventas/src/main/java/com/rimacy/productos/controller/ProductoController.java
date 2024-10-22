package com.rimacy.productos.controller;

import com.rimacy.productos.models.Producto;
import com.rimacy.productos.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public List<Producto> getAllProductos(){
        return productoService.getAllProductos();
    }

    @GetMapping("/{id}")
    public Producto getProductoById(@PathVariable Long id){
        return productoService.getProductoById(id);
    }

    @PostMapping
    public Producto saveProducto(@RequestBody Producto producto){
        return productoService.saveProducto(producto);
    }

    @DeleteMapping("/{id}")
    public int delProducto(@PathVariable Long id){
        try {
            productoService.delProducto(id);
            return 1;
        }catch (Exception e){
            return 0;
        }

    }
}
