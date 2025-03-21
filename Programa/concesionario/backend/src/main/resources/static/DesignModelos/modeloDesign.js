document.addEventListener("DOMContentLoaded", function () {

    // Seleccionar elementos
    const Infotextexploraselection = document.querySelector(".ModelosTitlecarros");
    const nuevoUsadoElements = document.querySelectorAll(".modelo-nuevoUsado"); // Seleccionar todos
    const volverModelos = document.querySelectorAll(".volver-carros a");
    

    function aplicarTema(modoOscuro) {
        if (modoOscuro) {
            Infotextexploraselection.style.color = "#ff335f";
            nuevoUsadoElements.forEach(el => el.style.color = "#ff335f"); // Aplicar a todos

            volverModelos.forEach(el => el.style.color = "#ffffff"); 
        } else {
            Infotextexploraselection.style.color = "#00289F";
            nuevoUsadoElements.forEach(el => el.style.color = "#00289F"); // Aplicar a todos
            
            volverModelos.forEach(el => el.style.color = "#191919"); 
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
