package com.rimacy.colaboradores.services;

import com.rimacy.colaboradores.models.Colaborador;

import java.util.List;

public interface ColaboradorService {
    public List<Colaborador> getAllColaboradores();
    public Colaborador getColaboradorById(int id);
    public Colaborador saveColaborador(Colaborador colaborador);
    public void delColaborador(int id);
}
