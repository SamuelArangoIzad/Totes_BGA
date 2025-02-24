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
        return "marca"; // Nombre del archivo HTML en src/main/resources/templates
    }

    @GetMapping("/financiacion")
    public String mostrarFinanciacion() {
    return "Barra-Inferior-Info/TotesBgaFinanciacion/financiacion"; // Redirige a templates/TotesBgaFinanciacion/financiacion.html
    }

    @GetMapping("/cookiesettings")
    public String mostrarCookie() {
    return "Barra-Inferior-Info/CookieSettings/cookiesettings"; 
    }

    @GetMapping("/acercade")
    public String mostrarAcercaDe() {
    return "Barra-Inferior-Info/AcercaDe/acercade";
    }

    @GetMapping("/privacidad")
    public String mostrarPrivacidad() {
    return "Barra-Inferior-Info/Privacidad/privacidad"; 
    }

    @GetMapping("/nuestrosistema")
    public String mostrarNuestroSistema() {
    return "Barra-Inferior-Info/nuestroSistema/nuestrosistema"; 
    }

    @GetMapping("/protecciondedatospersonales")
    public String mostrarprotecciondedatospersonales() {
    return "Barra-Inferior-Info/politicaDeProteccionDeDatos/protecciondedatospersonales"; 
    }

    @GetMapping("/marca")
    public String mostrarMarcas(Model model) {
        List<Marca> marcas = marcaService.getAllMarcas();
        model.addAttribute("marcas", marcas);
        return "marca"; // Carga templates/marca.html
    }

}
