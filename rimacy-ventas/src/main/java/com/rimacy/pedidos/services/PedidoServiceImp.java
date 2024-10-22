package com.rimacy.pedidos.services;

import com.rimacy.pedidos.models.Pedido;
import com.rimacy.pedidos.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoServiceImp implements PedidoService{

    @Autowired
    private PedidoRepository pedidoRepository;

    @Override
    public List<Pedido> getPedidosByIdCliente(long id) {
        return pedidoRepository.findByCliente_Id(id);
    }

    @Override
    public List<Pedido> getAllPedidos() {        
        return  pedidoRepository.findAll();
    }

    @Override
    public Pedido getPedidoById(long id) {
        return pedidoRepository.findById(id).orElse(null);
    }

    @Override
    public Pedido savePedido(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    @Override
    public void delPedidoById(long id) {
        pedidoRepository.deleteById(id);
    }
}
