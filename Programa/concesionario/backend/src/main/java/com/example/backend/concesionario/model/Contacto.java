package com.example.backend.concesionario.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter 
@Setter
@Table(name = "Contacto")
public class Contacto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_contacto;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String apellido;

    @Column(nullable = false)
    private String telefono;

    @Column(name = "correo_electronico", nullable = false, unique = true)
    private String correo;

    @Column(nullable = false)
    private String departamento;

    @Column(nullable = false)
    private String ciudad;

    @Column(columnDefinition = "TEXT")
    private String comentarios;

    @Column(name = "fecha_registro", updatable = false, insertable = false)
    private String fechaRegistro;
}
