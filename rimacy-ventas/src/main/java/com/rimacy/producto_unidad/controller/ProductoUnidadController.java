package com.rimacy.producto_unidad.controller;

import com.rimacy.producto_unidad.models.ProductoUnidad;
import com.rimacy.producto_unidad.services.ProductoUnidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prod-uni")
@CrossOrigin
public class ProductoUnidadController {

    @Autowired
    private ProductoUnidadService productoUnidadService;
    @GetMapping("/byProd/{id}")
    public List<ProductoUnidad> getByProducto(@PathVariable("id") int id ){
        return productoUnidadService.getUnitsByProduct(id) ;
    }

    @PostMapping
    public void save(@RequestBody ProductoUnidad pu){
        productoUnidadService.save(pu);
    }
}
