package com.example.backend.concesionario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.concesionario.model.Carro;

@Repository
public interface CarroRepository extends JpaRepository<Carro, Long> {

    Carro findByModelo_Nombre(String nombreModelo);

}
