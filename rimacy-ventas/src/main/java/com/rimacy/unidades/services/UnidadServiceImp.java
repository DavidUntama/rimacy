package com.rimacy.unidades.services;

import com.rimacy.unidades.models.Unidad;
import com.rimacy.unidades.repositories.UnidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UnidadServiceImp implements UnidadService{

    @Autowired
    private UnidadRepository unidadRepository;
    @Override
    public List<Unidad> getAllUnidades() {
        return  unidadRepository.findAllByOrderByIdAsc();
    }

    @Override
    public List<Unidad> getAllUnidadesBase() {
        return unidadRepository.findAllUnidadesBase();
    }

    @Override
    public List<Unidad> getAllNonUnidadesBase() {
        return unidadRepository.findAllNonUnidadesBase();
    }

    @Override
    public Unidad getUnidadById(int id) {
        return unidadRepository.findById(id).orElse(null);
    }

    @Override
    public Unidad saveUnidad(Unidad unidad) {
        return unidadRepository.save(unidad);
    }

    @Override
    public void delUnidad(int id) {
        unidadRepository.deleteById(id);
    }
}
