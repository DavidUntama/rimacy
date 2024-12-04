package com.rimacy.clientes.repositories;

import com.rimacy.clientes.models.Cliente;
import com.rimacy.clientes.models.ClienteDTO;
import com.rimacy.clientes.models.ClienteProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findByNombresContainingIgnoreCaseOrApellidosContainingIgnoreCase(String nombre, String apellido);

    @Query(value = "SELECT c.id, p.nombres, p.apellidos, p.direccion FROM clientes c " +
            "INNER JOIN personas p ON c.id = p.id " +
            "WHERE c.search_vector @@ plainto_tsquery('spanish', :query)", nativeQuery = true)
    List<ClienteProjection> searchClientes(@Param("query") String query);
}
