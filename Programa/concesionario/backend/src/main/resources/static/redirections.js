/**
 * Event listener that waits for the DOM content to be fully loaded before attaching click events to various menu and information items.
 */

document.addEventListener("DOMContentLoaded", function () {
    /**
     * Redirects to the 'marca' page when the 'inicial' menu item is clicked.
     */
    document.querySelector(".menu-item.inicial")?.addEventListener("click", function () {
        window.location.href = "/marca"; // Asegúrate de que coincide con el @GetMapping del controlador
    });
    /**
     * Redirects to the 'contacto' page when the 'contacto' menu item is clicked.
     */
    document.querySelector(".menu-item.contacto")?.addEventListener("click", function () {
        window.location.href = "/contacto";
    });

    document.querySelector(".btn-agendar")?.addEventListener("click", function () {
        window.location.href = "/contacto";
    });
    
});


// SECTION BY CHANGE COLOR
document.addEventListener("DOMContentLoaded", function () {
    
    const switchButton = document.querySelector(".switch");
    const fondo = document.querySelector(".concesionario");
    const logo = document.querySelector(".contenedor-imagen");
    
    const menuItems = document.querySelectorAll(".menu-item");

    // Function for apply the theme saved

    function aplicarTema(modoOscuro) {
    // DARK MODE
    if (modoOscuro) {
        fondo.style.background = "#191919";
        logo.style.backgroundImage = "url('/MarcaFrame/Images/logo-totes0.png')";
        menuItems.forEach(item => item.style.color = "#ffffff");
    } 
    // LIGHT MODE
    else {
        fondo.style.background = "#ffffff";
        logo.style.backgroundImage = "url('/MarcaFrame/Images/logo-totes1.png')";
        menuItems.forEach(item => item.style.color = "#424242");
    }

    // Lanzar evento personalizado para sincronizar con marca.js
    const evento = new Event("temaCambiado");
    window.dispatchEvent(evento);
}


    // Verify if there is a saved state
    const temaGuardado = localStorage.getItem("modoOscuro") === "true";
    if (temaGuardado) {
        switchButton.classList.add("active"); // Active the switch if there in dark mode
    }
    aplicarTema(temaGuardado);

    // Event for change the theme and saved the preference
    switchButton.addEventListener("click", function () {
        switchButton.classList.toggle("active");
        const esModoOscuro = switchButton.classList.contains("active");
        localStorage.setItem("modoOscuro", esModoOscuro); // Saved in localStorage
        aplicarTema(esModoOscuro);
    });
});
