package com.rimacy.clienteTipo.services;


import com.rimacy.clienteTipo.models.ClienteTipo;

import java.util.List;

public interface ClienteTipoService {
    public List<ClienteTipo> getAllClienteTipo();
    public ClienteTipo saveClienteTipo(ClienteTipo cliente);
    public ClienteTipo getClienteTipoById(int id);
    public void delClienteTipoById(int id);
}
