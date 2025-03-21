package com.example.backend.concesionario.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Modelo")
public class Modelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_modelo")
    private Long idModelo;

    @Column(name = "nombre", length = 50, nullable = false, unique = true)
    private String nombre;

    @Column(name = "costo", nullable = false, precision = 14, scale = 2)
    private BigDecimal costo;

    @Enumerated(EnumType.STRING)
    @Column(name = "nuevo_usado", nullable = false)
    private EstadoModelo nuevoUsado;

    @ManyToOne
    @JoinColumn(name = "id_marca", nullable = false)
    private Marca marca;

    @Column(name = "imagen_url", length = 255, nullable = false)
    private String imagenUrl;

    // Constructor vacío necesario para JPA
    public Modelo() {
    }

    // Constructor con parámetros
    public Modelo(String nombre, BigDecimal costo, EstadoModelo nuevoUsado, Marca marca, String imagenUrl) {
        this.nombre = nombre;
        this.costo = costo;
        this.nuevoUsado = nuevoUsado;
        this.marca = marca;
        this.imagenUrl = imagenUrl;
    }

    // Getters y Setters
    public Long getIdModelo() {
        return idModelo;
    }

    public void setIdModelo(Long idModelo) {
        this.idModelo = idModelo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public BigDecimal getCosto() {
        return costo;
    }

    public void setCosto(BigDecimal costo) {
        this.costo = costo;
    }

    public EstadoModelo getNuevoUsado() {
        return nuevoUsado;
    }

    public void setNuevoUsado(EstadoModelo nuevoUsado) {
        this.nuevoUsado = nuevoUsado;
    }

    public Marca getMarca() {
        return marca;
    }

    public void setMarca(Marca marca) {
        this.marca = marca;
    }

    public String getImagenUrl() {
        return imagenUrl;
    }

    public void setImagenUrl(String imagenUrl) {
        this.imagenUrl = imagenUrl;
    }

    public enum EstadoModelo {
        Nuevo,
        Usado
    }
}
