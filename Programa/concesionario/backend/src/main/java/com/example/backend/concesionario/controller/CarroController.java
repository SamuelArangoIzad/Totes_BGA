package com.example.backend.concesionario.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import com.example.backend.concesionario.model.Carro;
import com.example.backend.concesionario.model.Modelo;
import com.example.backend.concesionario.service.CarroService;
import com.example.backend.concesionario.service.ModeloService;


@Controller
@RequestMapping("/carro")
public class CarroController {
    
    @Autowired
    private CarroService carroService;

    @Autowired
    private ModeloService modeloService;

    @GetMapping("/detalle")
    public String detalleModelo(@RequestParam("nombreModelo") String nombreModelo, Model model) {
        Optional<Modelo> modeloOpt = modeloService.obtenerPorNombre(nombreModelo);

        if (modeloOpt.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Modelo no encontrado");
        }

        Modelo modelo = modeloOpt.get();
        Carro carro = carroService.obtenerCarroPorModelo(nombreModelo);
        if (carro == null) {
            model.addAttribute("modelo", modelo);
            model.addAttribute("error", "Detalles del carro no encontrados");
            return "Barra/Mod/Carro/carro"; // Cargar la plantilla con el mensaje de error
        }

        model.addAttribute("modelo", modeloOpt.get());
        model.addAttribute("carro", carro);
        model.addAttribute("marca", modelo.getMarca()); // Añadir la marca
        

        return "Barra/Mod/Carro/carro";
    }

}
