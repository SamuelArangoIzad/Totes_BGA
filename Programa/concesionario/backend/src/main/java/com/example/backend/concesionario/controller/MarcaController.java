package com.example.backend.concesionario.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.backend.concesionario.model.Marca;
import com.example.backend.concesionario.service.MarcaService;

@Controller
@RequestMapping("/")
public class MarcaController {
    @Autowired
    private MarcaService marcaService;

    @GetMapping
    public String listarMarcas(Model model) {
        List<Marca> marcas = marcaService.getAllMarcas();
        model.addAttribute("marcas", marcas);
        return "index"; // Nombre del archivo HTML en src/main/resources/templates
    }
}
