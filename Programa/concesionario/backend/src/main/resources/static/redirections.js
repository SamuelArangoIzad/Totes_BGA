document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".menu-item.inicial")?.addEventListener("click", function () {
        window.location.href = "/marca"; // Asegúrate de que coincide con el @GetMapping del controlador
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

    // Elementos de texto
    const tituloAutoIdeal = document.querySelector(".Encuentra-el-auto-ideal-para-ti-al");
    const preciopagetext = document.querySelector(".precio-page");
    const Infotextexploraselection = document.querySelector(".Info-text-exploraselection");
    const favoritetext = document.querySelector(".favorite-model");
    const datavariedad = document.querySelector(".data-variedad");

    // 🌟 Función para aplicar el tema guardado
    function aplicarTema(modoOscuro) {
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
        } else {
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
        }
    }

    // 🌟 Verificar si hay un estado guardado
    const temaGuardado = localStorage.getItem("modoOscuro") === "true";
    if (temaGuardado) {
        switchButton.classList.add("active"); // Activar el switch si estaba en modo oscuro
    }
    aplicarTema(temaGuardado);

    // 🌟 Evento para cambiar el tema y guardar la preferencia
    switchButton.addEventListener("click", function () {
        switchButton.classList.toggle("active");
        const esModoOscuro = switchButton.classList.contains("active");
        localStorage.setItem("modoOscuro", esModoOscuro); // Guardar en localStorage
        aplicarTema(esModoOscuro);
    });
});
