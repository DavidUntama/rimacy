package com.rimacy.pedidos.services;

import com.rimacy.pedidos.models.Pedido;
import com.rimacy.pedidos.models.PedidoDTO;

import java.util.List;

public interface PedidoService {
    List<Pedido> getAllPedidos();
    List<Pedido> getPedidosByIdCliente(long id);
    Pedido getPedidoById(long id);
    Pedido savePedido(Pedido pedido);
    void delPedidoById(long id);
    Pedido crearPedido(PedidoDTO pedidoDTO);
}
