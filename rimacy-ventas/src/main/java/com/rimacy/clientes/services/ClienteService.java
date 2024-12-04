package com.rimacy.clientes.services;

import com.rimacy.clientes.models.Cliente;
import com.rimacy.clientes.models.ClienteDTO;

import java.util.List;

public interface ClienteService {
    List<Cliente> getAllClientes();
    List<Cliente> getAllClientesWithPedidos();
    //List<Cliente> findSuggestion(String s);
    Cliente saveCliente(Cliente cliente);
    Cliente getClienteById(Long id);
    void delCliente(Long id);

    List<ClienteDTO> findSuggestion(String kw);
}
