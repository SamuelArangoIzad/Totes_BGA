document.addEventListener("DOMContentLoaded", function () {

    // Seleccionar elementos
    const Infotextexploraselection = document.querySelector(".marca-carro-modelo");
    const anioCarro = document.querySelector(".anio-carro");
    const tasaaceleracion = document.querySelector(".Tasa-Aceleracion-Carro");
    const velociadMaxima = document.querySelector(".Velocidad-Maxima-Carro");
    const condicioncarro = document.querySelector(".Condicion-Carro");
    const precioCarro = document.querySelector(".Precio-Carro");


    const nuevoUsadoElements = document.querySelectorAll(".titulo-modelo-carro"); // Seleccionar todos
    const descriptioncarro = document.querySelector(".descripcion-carro");
    const tasaaceleracioncarro = document.querySelector(".Tasa-Aceleracion");
    const VelocidadMaximaCarro = document.querySelector(".Velocidad-Maxima");
    const NuevoUsadoCarro = document.querySelector(".Nuevo-Usado");
    const PrecioCar = document.querySelector(".Precio");


    const btnAgendar = document.querySelector(".btn-agendar");
    const volverModelos = document.querySelector(".volver-modelos a");


    function aplicarTema(modoOscuro) {
        if (modoOscuro) {
            Infotextexploraselection.style.color = "#ff335f";
            anioCarro.style.color = "#ff335f";
            tasaaceleracion.style.color = "#ff335f";
            velociadMaxima.style.color = "#ff335f";
            condicioncarro.style.color = "#ff335f";
            precioCarro.style.color = "#ff335f";
            btnAgendar.style.backgroundColor = "#ff335f";

            nuevoUsadoElements.forEach(el => el.style.color = "#ffffff"); // Aplicar a todos
            descriptioncarro.style.color = "#ffffff"; 
            tasaaceleracioncarro.style.color = "#ffffff"; 
            VelocidadMaximaCarro.style.color = "#ffffff"; 
            NuevoUsadoCarro.style.color = "#ffffff"; 
            PrecioCar.style.color = "#ffffff"; 


            volverModelos.style.color = "#ffffff";
        } else {
            Infotextexploraselection.style.color = "#00289F";
            anioCarro.style.color = "#00289F";
            tasaaceleracion.style.color = "#00289F";
            velociadMaxima.style.color = "#00289F";
            condicioncarro.style.color = "#00289F";
            precioCarro.style.color = "#00289F";
            btnAgendar.style.backgroundColor = "#00289F";

            nuevoUsadoElements.forEach(el => el.style.color = "#191919"); // Aplicar a todos
            descriptioncarro.style.color = "#191919"; 
            tasaaceleracioncarro.style.color = "#191919"; 
            VelocidadMaximaCarro.style.color = "#191919"; 
            NuevoUsadoCarro.style.color = "#191919"; 
            PrecioCar.style.color = "#191919"; 


            volverModelos.style.color = "#191919";
        }
    }

    // Revisar el estado guardado en localStorage
    const temaGuardado = localStorage.getItem("modoOscuro") === "true";
    aplicarTema(temaGuardado);

    // Escuchar evento para cambio de tema
    window.addEventListener("temaCambiado", function () {
        const temaGuardado = localStorage.getItem("modoOscuro") === "true";
        aplicarTema(temaGuardado);
    });


});
