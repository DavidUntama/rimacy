package com.rimacy.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "personas")
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 25)
    private String nombres;

    @Column(length = 25)
    private String apellidos;

    @Column(length = 50)
    private String direccion;

    @Column(length = 12)
    private String telefono;

    @Column(length = 40)
    private String email;

    @Column(length = 12)
    private String ruc;

}
