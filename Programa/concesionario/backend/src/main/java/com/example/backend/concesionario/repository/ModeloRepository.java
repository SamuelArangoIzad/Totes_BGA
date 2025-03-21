package com.example.backend.concesionario.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.backend.concesionario.model.Modelo;

@Repository
public interface ModeloRepository extends JpaRepository<Modelo, Long> {

    @Query("SELECT m FROM Modelo m WHERE m.marca.id = :idMarca")
    List<Modelo> findByMarca(@Param("idMarca") Long idMarca);
    
}
