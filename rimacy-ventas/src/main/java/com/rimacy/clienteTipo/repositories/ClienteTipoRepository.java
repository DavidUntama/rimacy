package com.rimacy.clienteTipo.repositories;

import com.rimacy.clienteTipo.models.ClienteTipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteTipoRepository extends JpaRepository<ClienteTipo, Integer> {

}
