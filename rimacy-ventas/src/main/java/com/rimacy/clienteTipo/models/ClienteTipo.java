package com.rimacy.clienteTipo.models;

import com.rimacy.models.Persona;
import com.rimacy.pedidos.models.Pedido;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.DynamicUpdate;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "clientes_tipo")
public class ClienteTipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id;

    @Column(length = 40)
    private  String nombre;

}
