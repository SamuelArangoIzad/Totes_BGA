package com.example.backend.concesionario.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Carro")
public class Carro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_carro")
    private Long idCarro;

    @ManyToOne
    @JoinColumn(name = "id_modelo", nullable = false)
    private Modelo modelo;

    @Column(name = "velocidad_maxima", nullable = false)
    private int velocidadMaxima;

    @Column(name = "anio", nullable = false)
    private int anio;

    @Column(name = "descripcion", length = 150)  // Se agregó la restricción de longitud
    private String descripcion;

    @Column(name = "tasa_aceleracion", nullable = false, precision = 5, scale = 2)
    private BigDecimal tasaAceleracion;  // Se cambió de double a BigDecimal

    @Column(name = "imagen_url", nullable = false, length = 255)
    private String imagenUrl;

    // Constructor vacío necesario para JPA
    public Carro() {
    }

    // Constructor con parámetros
    public Carro(Modelo modelo, int velocidadMaxima, int anio, String descripcion, BigDecimal tasaAceleracion, String imagenUrl) {
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
        this.anio = anio;
        this.descripcion = descripcion;
        this.tasaAceleracion = tasaAceleracion;
        this.imagenUrl = imagenUrl;
    }

    // Getters y Setters
    public Long getIdCarro() {
        return idCarro;
    }

    public void setIdCarro(Long idCarro) {
        this.idCarro = idCarro;
    }

    public Modelo getModelo() {
        return modelo;
    }

    public void setModelo(Modelo modelo) {
        this.modelo = modelo;
    }

    public int getVelocidadMaxima() {
        return velocidadMaxima;
    }

    public void setVelocidadMaxima(int velocidadMaxima) {
        this.velocidadMaxima = velocidadMaxima;
    }

    public int getAnio() {
        return anio;
    }

    public void setAnio(int anio) {
        this.anio = anio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public BigDecimal getTasaAceleracion() {
        return tasaAceleracion;
    }

    public void setTasaAceleracion(BigDecimal tasaAceleracion) {
        this.tasaAceleracion = tasaAceleracion;
    }

    public String getImagenUrl() {
        return imagenUrl;
    }

    public void setImagenUrl(String imagenUrl) {
        this.imagenUrl = imagenUrl;
    }
    
}
