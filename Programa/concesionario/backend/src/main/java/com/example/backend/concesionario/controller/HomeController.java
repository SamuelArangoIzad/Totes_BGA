package com.example.backend.concesionario.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HomeController {
    
    @GetMapping
    public String home() {
        return "Bienvenido al concesionario! Consulte la documentación para conocer los endpoints disponibles.";
    }
}
