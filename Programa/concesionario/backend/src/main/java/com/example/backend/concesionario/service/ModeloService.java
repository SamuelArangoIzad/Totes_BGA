package com.example.backend.concesionario.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.concesionario.model.Modelo;
import com.example.backend.concesionario.repository.ModeloRepository;

@Service
public class ModeloService {
    
    @Autowired
    private final ModeloRepository modeloRepository;

    public ModeloService(ModeloRepository modeloRepository) {
        this.modeloRepository = modeloRepository;
    }

    public List<Modelo> obtenerPorMarca(Long idMarca) {
        List<Modelo> modelos = modeloRepository.findByMarca(idMarca);
        return modelos;
    }

    public Optional<Modelo> obtenerPorNombre(String nombre) {
        return modeloRepository.findAll().stream()
                .filter(modelo -> modelo.getNombre().equalsIgnoreCase(nombre))
                .findFirst();
    }

    public List<Modelo> obtenerModelosPorMarca(Long idMarca) {
        return modeloRepository.findByMarca(idMarca);  // Aquí usamos el método correcto
    }

}
