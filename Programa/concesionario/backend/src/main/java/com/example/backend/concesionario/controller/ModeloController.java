package com.example.backend.concesionario.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

import com.example.backend.concesionario.model.Marca;
import com.example.backend.concesionario.model.Modelo;
import com.example.backend.concesionario.service.MarcaService;
import com.example.backend.concesionario.service.ModeloService;

@Controller
@RequestMapping("/modelos")
public class ModeloController {

    private final ModeloService modeloService;
    private final MarcaService marcaService;

    @Autowired
    public ModeloController(ModeloService modeloService, MarcaService marcaService) {
        this.modeloService = modeloService;
        this.marcaService = marcaService;
    }

    @GetMapping("/{idMarca}")
    public String listarModelosPorMarca(@PathVariable("idMarca") Long idMarca, Model model) {
        Marca marca = marcaService.obtenerMarcaPorId(idMarca);

        if (marca == null) {
            System.out.println("Error: Marca con ID " + idMarca + " no encontrada");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Marca no encontrada");
        }

        List<Modelo> modelos = modeloService.obtenerPorMarca(idMarca);
        System.out.println("Modelos encontrados: " + modelos);

        model.addAttribute("marca", marca);
        model.addAttribute("modelos", modelos);

        return "Barra/Mod/modelo";
    }
    @GetMapping("/api/modelosUpdate/{idMarca}")
    @ResponseBody
    public List<Modelo> obtenerModelosPorMarca(@PathVariable Long idMarca) {
        return modeloService.obtenerModelosPorMarca(idMarca);
    }
    

    

}
