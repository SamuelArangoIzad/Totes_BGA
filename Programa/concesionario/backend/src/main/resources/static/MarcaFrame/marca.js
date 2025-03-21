document.addEventListener("DOMContentLoaded", function () {

    // Elements of text of the html marca
    const tituloAutoIdeal = document.querySelector(".Encuentra-el-auto-ideal-para-ti-al");
    const preciopagetext = document.querySelector(".precio-page");
    const Infotextexploraselection = document.querySelector(".Info-text-exploraselection");
    const favoritetext = document.querySelector(".favorite-model");
    const datavariedad = document.querySelector(".data-variedad");

    function aplicarTema(modoOscuro) {
        if (modoOscuro) {
            tituloAutoIdeal.style.color = "#ffffff";
            preciopagetext.style.color = "#ff335f";
            Infotextexploraselection.style.color = "#ffffff";
            favoritetext.style.color = "#ff335f";
            datavariedad.style.color = "#ffffff";
        } else {
            tituloAutoIdeal.style.color = "#424242";
            preciopagetext.style.color = "#00289F";
            Infotextexploraselection.style.color = "#424242";
            favoritetext.style.color = "#00289F";
            datavariedad.style.color = "#424242";
        }
    }

        // Check localStorage theme
        const temaGuardado = localStorage.getItem("modoOscuro") === "true";
        aplicarTema(temaGuardado);
    
        // Event listener personalizado para sincronizar desde redirection.js
        window.addEventListener("temaCambiado", function () {
            const temaGuardado = localStorage.getItem("modoOscuro") === "true";
            aplicarTema(temaGuardado);
        });
    
});