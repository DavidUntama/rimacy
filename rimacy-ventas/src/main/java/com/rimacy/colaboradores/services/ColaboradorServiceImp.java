package com.rimacy.colaboradores.services;

import com.rimacy.colaboradores.models.Colaborador;
import com.rimacy.colaboradores.repositories.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ColaboradorServiceImp  implements ColaboradorService{

    @Autowired
    private ColaboradorRepository colaboradorRepository;
    @Override
    public List<Colaborador> getAllColaboradores() {
        return  colaboradorRepository.findAll();
    }

    @Override
    public Colaborador getColaboradorById(int id) {
        Optional<Colaborador> colaborador = colaboradorRepository.findById(id);
        return colaborador.orElse(null);
    }

    @Override
    public Colaborador saveColaborador(Colaborador colaborador) {
        return colaboradorRepository.save(colaborador);
    }

    @Override
    public void delColaborador(int id) {
        colaboradorRepository.deleteById(id);
    }
}
