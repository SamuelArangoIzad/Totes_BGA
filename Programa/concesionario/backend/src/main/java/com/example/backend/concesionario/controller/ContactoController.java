package com.example.backend.concesionario.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.concesionario.model.Contacto;
import com.example.backend.concesionario.service.ContactoService;

@RestController
@RequestMapping("/contacto")
@CrossOrigin("*")
public class ContactoController {
    
    @Autowired
    private ContactoService contactoService;

    @PostMapping("/guardar")
        public ResponseEntity<?> guardarContacto(@RequestBody Contacto contacto) {
        try {
            Contacto nuevoContacto = contactoService.guardarContacto(contacto);
            return ResponseEntity.status(HttpStatus.CREATED).body(nuevoContacto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Correo electrónico ya registrado.");
        }
    }
}
