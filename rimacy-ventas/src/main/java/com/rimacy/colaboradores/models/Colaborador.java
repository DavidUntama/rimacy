package com.rimacy.colaboradores.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.rimacy.models.Persona;
import com.rimacy.pedidos.models.Pedido;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "colaboradores")
public class Colaborador extends Persona {
    @Column(length = 40)
    private String puesto;
    private BigDecimal sueldo;
    @JsonIgnore
    @OneToMany(mappedBy = "colaborador", fetch = FetchType.LAZY)
    private List<Pedido> pedidos;

}
