package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        
        // Permite todas las solicitudes del mismo origen (localhost:8080)
        corsConfiguration.addAllowedOrigin("http://localhost:8080");
        corsConfiguration.addAllowedMethod("*"); // Permite todos los métodos
        corsConfiguration.addAllowedHeader("*"); // Permite todos los headers
        
        corsConfiguration.setAllowCredentials(true); // Permite envío de cookies o tokens

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);

        return new CorsFilter(source);
    }
}

    //ESTA CLASE ES INUTIL PORQUE YA NO ES NECESARIA YA QUE EL FRONTED ESTA DENTRO
    //DEL MISMO FRONTED ENTONCES ESTA BAJO EL MISMO DOMINIO O SERVIDOR, NO NECESITAMOS
    //CORS PORQUE NO SE CONSIDERA QUE HAYAN ORIGENES DIFERENTES


    // PERO PARA FUTURAS INTEGRACIONES Y PRACTICAS EXTERNAS O EVITAR ERRORES SE CONFIGURA SE 
    // ACTUALMENTE COMO ESTA

    //ULTIMA ACTUALIZACION DE ESTA CLASE 28/02/2025
