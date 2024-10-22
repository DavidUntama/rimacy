package com.rimacy.pedido_det.repositories;

import com.rimacy.pedido_det.models.PedidoDet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoDetRepository extends JpaRepository<PedidoDet, Long> {
}
