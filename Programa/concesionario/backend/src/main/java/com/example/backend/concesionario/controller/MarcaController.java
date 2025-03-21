package com.example.backend.concesionario.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
        return "marca"; // Nombre del archivo HTML en src/main/resources/templates
    }

    @GetMapping("/marca")
    public String mostrarMarcas(Model model) {
        List<Marca> marcas = marcaService.getAllMarcas();
        model.addAttribute("marcas", marcas);
        return "marca"; // Carga templates/marca.html
    }

    //REDIRECTIONS TO OTHER SPACES BY WORDS

    @GetMapping("/contacto")
    public String mostrarContacto() {
    return "Barra/Contacto/contacto"; 
    }

     // NUEVO ENDPOINT PARA OBTENER MARCAS EN FORMATO JSON
    @GetMapping("/api/marcas")
    @ResponseBody
    public List<Marca> obtenerMarcas() {
        return marcaService.getAllMarcas();
    }

}
