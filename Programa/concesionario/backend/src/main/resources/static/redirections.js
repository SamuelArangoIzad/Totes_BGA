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

    document.querySelector(".info-item.financiacion")?.addEventListener("click", function () {
        window.location.href = "/financiacion";
    });

    document.querySelector(".info-item.cookie")?.addEventListener("click", function () {
        window.location.href = "/cookiesettings";
    });

    document.querySelector(".info-item.acercade")?.addEventListener("click", function () {
        window.location.href = "/acercade";
    });

    document.querySelector(".info-item.privacidad")?.addEventListener("click", function () {
        window.location.href = "/privacidad";
    });

    document.querySelector(".info-item.nuestrosistema")?.addEventListener("click", function () {
        window.location.href = "/nuestrosistema";
    });

    document.querySelector(".info-item.politicadeprotecciondedatos")?.addEventListener("click", function () {
        window.location.href = "/protecciondedatospersonales";
    });

});



// SECTION BY CHANGE COLOR
document.addEventListener("DOMContentLoaded", function () {
    const switchButton = document.querySelector(".switch");
    const fondo = document.querySelector(".concesionario");
    const logo = document.querySelector(".contenedor-imagen");
    const menuItems = document.querySelectorAll(".menu-item");

    // Elements of text of the html marca
    const tituloAutoIdeal = document.querySelector(".Encuentra-el-auto-ideal-para-ti-al");
    const preciopagetext = document.querySelector(".precio-page");
    const Infotextexploraselection = document.querySelector(".Info-text-exploraselection");
    const favoritetext = document.querySelector(".favorite-model");
    const datavariedad = document.querySelector(".data-variedad");

    // Elements of text of the contact
    const elementosRosaContacto = document.querySelectorAll(".queremos-escucharte, .schedule-button");
    const elementosBlancosContacto = document.querySelectorAll(".tu-opinion, .contact-form, .label, .input, textarea, #nombre, #apellido, #telefono, #correo, #departamento, #ciudad");
    const elementoCuadradoContacto = document.querySelectorAll(".contact-button");
    // Get inputs
    const camposContacto = document.querySelectorAll("#nombre, #apellido, #telefono, #correo, #departamento, #ciudad");
    const selectDepartamento = document.querySelector("#departamento");
    const selectCiudad = document.querySelector("#ciudad");

    

    // Function for apply the theme saved
    function aplicarTema(modoOscuro) {
        // DARK MODE
        if (modoOscuro) {
            fondo.style.background = "#191919";
            logo.setAttribute("style", "background-image: url('MarcaFrame/Images/logo-totes0.png')");
            menuItems.forEach(item => item.style.color = "#ffffff");

            if (tituloAutoIdeal && favoritetext) {
                tituloAutoIdeal.style.color = "#ffffff";
                preciopagetext.style.color = "#ff335f";
                Infotextexploraselection.style.color = "#ffffff";
                favoritetext.style.color = "#ff335f";
                datavariedad.style.color = "#ffffff";
            }

            // Change Colors in the section of contact
            else if(camposContacto){
            elementosRosaContacto.forEach(el => el.style.color = "#ff335f"); // Vuelve a rosa
            elementosBlancosContacto.forEach(el => el.style.color = "#ffffff"); // Vuelve a blanco
            elementoCuadradoContacto.forEach(el => el.style.backgroundColor = "#ff335f");
            selectDepartamento.style.color = "#ff335f";
            selectCiudad.style.color = "#ff335f";
            }


            
        } 
        //LIGTH MODE
        else {
            fondo.style.background = "#ffffff";
            logo.setAttribute("style", "background-image: url('MarcaFrame/Images/logo-totes1.png')");
            menuItems.forEach(item => item.style.color = "#424242");

            if (tituloAutoIdeal && favoritetext) {
                tituloAutoIdeal.style.color = "#424242";
                preciopagetext.style.color = "#00289F";
                Infotextexploraselection.style.color = "#424242";
                favoritetext.style.color = "#00289F";
                datavariedad.style.color = "#424242";
            }


            else if(camposContacto){
            elementosRosaContacto.forEach(el => el.style.color = "#00289F"); // change to blue
            elementosBlancosContacto.forEach(el => el.style.color = "#000000"); // change to black
            elementoCuadradoContacto.forEach(el => el.style.backgroundColor = "#00289F");

            // change the line down of the inputs to black in light mode
            camposContacto.forEach(el => el.style.borderBottom = "0.3vh solid black");
            selectDepartamento.style.color = "#00289F";
            selectCiudad.style.color = "#00289F";
            }


        }
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
