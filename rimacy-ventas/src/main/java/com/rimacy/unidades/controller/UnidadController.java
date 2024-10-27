package com.rimacy.unidades.controller;

import com.rimacy.unidades.models.Unidad;
import com.rimacy.unidades.services.UnidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/unidades")
@CrossOrigin
public class UnidadController {
    @Autowired
    private UnidadService unidadService;

    @GetMapping("/all")
    public List<Unidad> getAllUnidades(){
        return unidadService.getAllUnidades();
    }
    @GetMapping("/allNonBase")
    public  List<Unidad> getAllUnidadesNonBase() { return unidadService.getAllNonUnidadesBase(); }
    @GetMapping("/base")
    public List<Unidad> getAllUnidadesBase(){
        return unidadService.getAllUnidadesBase();
    }

    @GetMapping("/{id}")
    public Unidad getUnidadById(@PathVariable int id){
        return unidadService.getUnidadById(id);
    }
    @PostMapping
    public Unidad saveUnidad(@RequestBody Unidad unidad){
        return unidadService.saveUnidad(unidad);
    }
    @DeleteMapping("/{id}")
    public int delUnidad(@PathVariable int id){
        try{
            unidadService.delUnidad(id);
            return 1;
        }catch (Exception e){
            return 0;
        }

    }
}
