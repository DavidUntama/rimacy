package com.rimacy.producto_unidad.services;

import com.rimacy.producto_unidad.models.ProductoUnidad;
import com.rimacy.producto_unidad.repositories.ProductoUnidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoUnidadServiceImp  implements ProductoUnidadService{
    @Autowired
    private ProductoUnidadRepository productoUnidadRepository;
    @Override
    public List<ProductoUnidad> getUnitsByProduct(int idProd) {
        return productoUnidadRepository.findUnidadIdsByProductoId(idProd);
    }

    @Override
    public int  save(ProductoUnidad productoUnidad) {
        ProductoUnidad pu = productoUnidadRepository.save(productoUnidad);
        return pu.getId();
    }

    @Override
    public void deletePair(Integer id) {
        productoUnidadRepository.deleteById(id);
    }
    //public void delete
}
