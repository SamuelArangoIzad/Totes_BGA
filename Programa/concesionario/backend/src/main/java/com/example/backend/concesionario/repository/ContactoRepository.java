package com.example.backend.concesionario.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.concesionario.model.Contacto;

public interface ContactoRepository extends JpaRepository<Contacto, Integer>{
    
}
