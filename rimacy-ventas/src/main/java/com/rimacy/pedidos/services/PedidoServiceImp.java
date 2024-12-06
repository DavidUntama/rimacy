package com.rimacy.pedidos.services;

import com.rimacy.clientes.models.Cliente;
import com.rimacy.clientes.repositories.ClienteRepository;
import com.rimacy.colaboradores.models.Colaborador;
import com.rimacy.colaboradores.repositories.ColaboradorRepository;
import com.rimacy.pedidos.models.Pedido;
import com.rimacy.pedidos.models.PedidoDTO;
import com.rimacy.pedidos.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoServiceImp implements PedidoService{

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ColaboradorRepository colaboradorRepository;

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

    @Override
    public Pedido crearPedido(PedidoDTO pedidoDTO) {
        Pedido pedido = new Pedido();
        pedido.setNroGuia(pedidoDTO.getNroGuia());
        pedido.setIdCliente(pedidoDTO.getIdCliente());
        pedido.setIdColaborador(pedidoDTO.getIdColaborador());
        pedido.setFecha_ped(pedidoDTO.getFechaPed());
        pedido.setFecha_ent(pedidoDTO.getFechaEnt());
        pedido.setImporte(pedidoDTO.getImporte());
        pedido.setDescuento(pedidoDTO.getDescuento());
        pedido.setContado(pedidoDTO.isContado());
        Cliente cliente = clienteRepository.findById(pedidoDTO.getIdCliente()).orElse(null);
        Colaborador vendedor = colaboradorRepository.findById(Math.toIntExact(pedidoDTO.getIdColaborador())).orElse(null);
        pedido.setCliente(cliente);
        pedido.setColaborador(vendedor);

        return pedidoRepository.save(pedido);
    }
}
