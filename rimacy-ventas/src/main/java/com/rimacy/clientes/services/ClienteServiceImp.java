package com.rimacy.clientes.services;

import com.rimacy.clientes.models.Cliente;
import com.rimacy.clientes.repositories.ClienteRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Collections;

@Service
public class ClienteServiceImp implements ClienteService{
    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public List<Cliente> getAllClientesWithPedidos() {
        return clienteRepository.findAll();
    }

    public List<Cliente> getAllClientes(){
        List<Cliente> lst = clienteRepository.findAll();
        lst.forEach( c -> c.setPedidos(null) );
        return lst;
    }

    public Cliente saveCliente(Cliente cliente){
        //cliente es nuevo
        System.out.println(cliente.getId());
        if( cliente.getId() == null || ! clienteRepository.existsById(cliente.getId()) )
        {
            if (cliente.getPedidos() == null) {
                cliente.setPedidos(new ArrayList<>());
            }
        } else {  // el cliente existe, estamos modificando
            Cliente clienteExistente = clienteRepository.findById(cliente.getId()).orElseThrow(() -> new EntityNotFoundException("Cliente no encontrado"));

            cliente.setPedidos(clienteExistente.getPedidos());
        }
        return clienteRepository.save(cliente);
    }

    @Override
    public Cliente getClienteById(Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        return cliente.orElse(null);
    }

    @Override
    public void delCliente(Long id) {
        clienteRepository.deleteById( id);
    }


}
