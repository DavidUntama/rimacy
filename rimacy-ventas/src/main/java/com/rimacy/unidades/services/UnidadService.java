package com.rimacy.unidades.services;

import com.rimacy.unidades.models.Unidad;

import java.util.List;

public interface UnidadService {
    List<Unidad> getAllUnidades();
    List<Unidad> getAllUnidadesBase();
    List<Unidad> getAllNonUnidadesBase();
    Unidad getUnidadById(int id);
    Unidad saveUnidad(Unidad unidad);
    void delUnidad(int id);
}
