package com.example.backend.concesionario.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.concesionario.model.Carro;
import com.example.backend.concesionario.repository.CarroRepository;

@Service
public class CarroService {
    
    private final CarroRepository carroRepository;

    @Autowired
    public CarroService(CarroRepository carroRepository) {
        this.carroRepository = carroRepository;
    }

    public Carro obtenerCarroPorModelo(String nombreModelo) {
        return carroRepository.findByModelo_Nombre(nombreModelo);
    }

}
