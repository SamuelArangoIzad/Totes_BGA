package com.example.backend.concesionario.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.concesionario.model.Contacto;
import com.example.backend.concesionario.repository.ContactoRepository;

@Service
public class ContactoService {
    @Autowired
    private ContactoRepository contactoRepository;

    public Contacto guardarContacto(Contacto contacto) {
        return contactoRepository.save(contacto);
    }
}
