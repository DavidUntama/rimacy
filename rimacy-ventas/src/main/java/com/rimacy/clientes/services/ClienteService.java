package com.rimacy.clientes.services;

import com.rimacy.clientes.models.Cliente;

import java.util.List;

public interface ClienteService {
    public List<Cliente> getAllClientes();
    public List<Cliente> getAllClientesWithPedidos();
    public Cliente saveCliente(Cliente cliente);
    public Cliente getClienteById(Long id);
    public void delCliente(Long id);
}
