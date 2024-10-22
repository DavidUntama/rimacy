package com.rimacy.pedidos.services;

import com.rimacy.pedidos.models.Pedido;
import java.util.List;

public interface PedidoService {
    public List<Pedido> getAllPedidos();
    public List<Pedido> getPedidosByIdCliente(long id);
    public Pedido getPedidoById(long id);
    public Pedido savePedido(Pedido pedido);
    public void delPedidoById(long id);    
}
