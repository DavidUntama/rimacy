package com.rimacy.colaboradores.controller;


import com.rimacy.colaboradores.models.Colaborador;
import com.rimacy.colaboradores.services.ColaboradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/colaboradores")
@CrossOrigin(origins = "http://localhost:4200")
public class ColaboradorController {

    @Autowired
    ColaboradorService colaboradorService;
    @GetMapping
    public List<Colaborador> getAllColaboradores(){
        return colaboradorService.getAllColaboradores();
    }
    @GetMapping("/{id}")
    public Colaborador getColaboradorById(@PathVariable int id){
        return colaboradorService.getColaboradorById(id);
    }
    @PostMapping
    public Colaborador saveColaborador(@RequestBody Colaborador colaborador){
        return colaboradorService.saveColaborador(colaborador);
    }
    @DeleteMapping("/{id}")
    public int delColaborador(@PathVariable int id){
        try{
            colaboradorService.delColaborador(id);
            return 1;
        }catch (Exception e){
            return 0;
        }

    }
}
