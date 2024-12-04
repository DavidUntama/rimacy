package com.rimacy.clientes.controller;

import com.rimacy.clientes.models.Cliente;
import com.rimacy.clientes.models.ClienteDTO;
import com.rimacy.clientes.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
@CrossOrigin
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<Cliente> getAllClientes(){
        return clienteService.getAllClientes();
    }
    @GetMapping("clientes-pedidos")
    public List<Cliente> getAllClientesWithPedidos(){
        return clienteService.getAllClientesWithPedidos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getClienteById(@PathVariable Long id){
        return ResponseEntity.ok(clienteService.getClienteById(id));
    }

    @GetMapping("search/{s}")
    public List<ClienteDTO> getSuggestion(@PathVariable String s){
        return clienteService.findSuggestion(s);
    }



    @PostMapping
    public Cliente saveCliente(@RequestBody Cliente cliente){
        return clienteService.saveCliente(cliente);
    }

    @DeleteMapping("/{id}")
    public int deleteCliente(@PathVariable Long id){
        try{
            clienteService.delCliente(id);
            return 1;
        }catch (Exception e){
            return 0;
        }
    }


}