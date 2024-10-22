package com.rimacy.clienteTipo.controller;



import com.rimacy.clienteTipo.models.ClienteTipo;
import com.rimacy.clienteTipo.services.ClienteTipoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes_tipo")
@CrossOrigin
public class ClienteTipoController {

    @Autowired
    private ClienteTipoService clienteTipoService;

    @GetMapping
    public List<ClienteTipo> getAllClienteTipo(){
        return clienteTipoService.getAllClienteTipo();
    }
    @GetMapping("/{id}")
    public  ClienteTipo getClienteTipo(@PathVariable int id){
        return clienteTipoService.getClienteTipoById(id);
    }
    @PostMapping
    public ClienteTipo saveClienteTipo(@RequestBody ClienteTipo clienteTipo){
        return clienteTipoService.saveClienteTipo(clienteTipo);
    }
    @DeleteMapping("/{id}")
    public int deleteClienteTipoById(@PathVariable int id){
        try {
            clienteTipoService.delClienteTipoById(id);
            return 1;
        }catch (Exception e){
            System.out.println(e);
            return 0;
        }
    }




}