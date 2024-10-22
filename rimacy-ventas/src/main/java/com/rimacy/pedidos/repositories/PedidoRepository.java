package com.rimacy.pedidos.repositories;

import com.rimacy.pedidos.models.Pedido;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    /**
    ***** findByCliente_Id: ******

    * findBy:  convencion que le dice al contenedor que se va buscar
    * Cliente: es el nombre del campo en la entidad Pedido.
    * Id:      es el campo en la entidad Cliente que deseas usar para buscar.

    * */
    List<Pedido> findByCliente_Id(long id);
}
