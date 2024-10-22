package com.rimacy.clienteTipo.services;

import com.rimacy.clienteTipo.models.ClienteTipo;
import com.rimacy.clienteTipo.repositories.ClienteTipoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteTipoServiceImp implements ClienteTipoService{
    @Autowired
    private ClienteTipoRepository clienteTipoRepository;
    @Override
    public List<ClienteTipo> getAllClienteTipo() {
        return clienteTipoRepository.findAll() ;
    }

    @Override
    public ClienteTipo saveClienteTipo(ClienteTipo clienteTipo) {
        return clienteTipoRepository.save(clienteTipo);
    }

    @Override
    public ClienteTipo getClienteTipoById(int id) {
        return clienteTipoRepository.findById( id ).orElse(null);
    }

    @Override
    public void delClienteTipoById(int id) {
        clienteTipoRepository.deleteById(id);
    }
}
