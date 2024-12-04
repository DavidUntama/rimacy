package com.rimacy.clientes.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.rimacy.clienteTipo.models.ClienteTipo;
import com.rimacy.models.Persona;
import com.rimacy.pedidos.models.Pedido;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.DynamicUpdate;

import java.util.ArrayList;
import java.util.List;

@Entity
@DynamicUpdate
@EqualsAndHashCode(callSuper=true)
@Data
@Table(name = "clientes")
public class Cliente extends Persona {
    @Column(length = 40)
    private String ruta;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Pedido> pedidos = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "id_cliente_tipo", nullable = false)
    private ClienteTipo clienteTipo;

    @Column(columnDefinition = "tsvector")
    private String searchVector;
}
