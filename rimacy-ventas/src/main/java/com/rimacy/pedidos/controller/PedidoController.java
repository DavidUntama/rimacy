package com.rimacy.pedidos.controller;

import com.rimacy.pedidos.models.Pedido;
import com.rimacy.pedidos.models.PedidoDTO;
import com.rimacy.pedidos.services.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;
    @GetMapping
    public List<Pedido> getAllPedidos(){
        return  pedidoService.getAllPedidos();
    }
    @GetMapping("/pedidos-cliente/{id}")
    public List<Pedido> getPedidoByIdCliente(@PathVariable long id){
        return  pedidoService.getPedidosByIdCliente(id);
    }
    @GetMapping("/{id}")
    public Pedido getPedidoById(@PathVariable long id){
        return pedidoService.getPedidoById(id);
    }
    //@PostMapping
    /*public Pedido savePedido(@RequestBody Pedido pedido){
        return pedidoService.savePedido(pedido);
    }*/
    @PostMapping
    public Pedido crearPedido(@RequestBody PedidoDTO pedidoDTO) {
        return pedidoService.crearPedido(pedidoDTO);
    }
    @DeleteMapping("/{id}")
    public int delPedidoById(@PathVariable long id){
        try {
            pedidoService.delPedidoById(id);
            return 1;
        }catch (Exception e){
            return 0;
        }
    }
}
