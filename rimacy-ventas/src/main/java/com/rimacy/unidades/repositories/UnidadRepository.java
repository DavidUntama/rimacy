package com.rimacy.unidades.repositories;

import com.rimacy.unidades.models.Unidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UnidadRepository extends JpaRepository<Unidad, Integer> {
    List<Unidad> findAllByOrderByIdAsc();
    @Query("select u from Unidad u where u.cantidad=1")
    List<Unidad> findAllUnidadesBase();
}
