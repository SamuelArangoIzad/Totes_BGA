package com.example.backend.concesionario.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.concesionario.model.Marca;
import com.example.backend.concesionario.repository.MarcaRepository;

@Service
public class MarcaService {
    @Autowired
    private MarcaRepository marcaRepository;

    public List<Marca> getAllMarcas() {
        return marcaRepository.findAll();
    }

    public Marca saveMarca(Marca marca) {
        return marcaRepository.save(marca);
    }

    public Marca obtenerMarcaPorId(Long id) {
        return marcaRepository.findById(id).orElse(null);
    }
}
