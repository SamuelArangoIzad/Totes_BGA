// This event ensures the code runs only after the HTML content is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Array containing the list of departments in Colombia
    let departamentos = [
        "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", 
        "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", 
        "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia",
        "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
    ];
    
    // Object containing cities corresponding to each department
    let ciudades = {
        "Amazonas": ["Leticia"],
        "Antioquia": ["Medellín", "Envigado", "Bello", "Itagüí", "Apartadó"],
        "Arauca": ["Arauca"],
        "Atlántico": ["Barranquilla", "Soledad", "Malambo"],
        "Bolívar": ["Cartagena", "Magangué", "Turbaco"],
        "Boyacá": ["Tunja", "Duitama", "Sogamoso"],
        "Caldas": ["Manizales", "La Dorada", "Chinchiná"],
        "Caquetá": ["Florencia"],
        "Casanare": ["Yopal"],
        "Cauca": ["Popayán"],
        "Cesar": ["Valledupar", "Aguachica"],
        "Chocó": ["Quibdó"],
        "Córdoba": ["Montería", "Cereté"],
        "Cundinamarca": ["Bogotá", "Soacha", "Zipaquirá", "Facatativá"],
        "Guainía": ["Inírida"],
        "Guaviare": ["San José del Guaviare"],
        "Huila": ["Neiva", "Pitalito"],
        "La Guajira": ["Riohacha", "Maicao"],
        "Magdalena": ["Santa Marta", "Ciénaga"],
        "Meta": ["Villavicencio", "Acacías"],
        "Nariño": ["Pasto", "Tumaco"],
        "Norte de Santander": ["Cúcuta", "Ocaña"],
        "Putumayo": ["Mocoa"],
        "Quindío": ["Armenia"],
        "Risaralda": ["Pereira", "Dosquebradas"],
        "San Andrés y Providencia": ["San Andrés"],
        "Santander": ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta"],
        "Sucre": ["Sincelejo"],
        "Tolima": ["Ibagué", "Espinal"],
        "Valle del Cauca": ["Cali", "Palmira", "Buenaventura"],
        "Vaupés": ["Mitú"],
        "Vichada": ["Puerto Carreño"]
    };

    // Get the select elements for departments and cities from the HTML
    let selectDepartamento = document.getElementById("departamento");
    let selectCiudad = document.getElementById("ciudad");

    // Loop through the list of departments and create <option> elements for each
    departamentos.forEach(dep => {
        let option = document.createElement("option"); //Create an option element
        option.value = dep; //Set the value of the option
        option.text = dep; //Set the text of the option
        selectDepartamento.appendChild(option); // Append the option to the department dropdown
    });

    // Event listener to detect when the user selects a department
    selectDepartamento.addEventListener("change", function () {
        // Reset the city dropdown when a new department is selected
        selectCiudad.innerHTML = '<option value="">Seleccione una ciudad</option>';
        let selected = this.value;

        // Check if the selected department has associated cities
        if (ciudades[selected]) {
            // Loop through the cities and create <option> elements for each
            ciudades[selected].forEach(ciudad => {
                let option = document.createElement("option");
                option.value = ciudad; // Set the city value
                option.text = ciudad; // Set the city text
                selectCiudad.appendChild(option); // Append the city option to the city dropdown
            });
        }
    });



    document.querySelector(".contact-form").addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita que se recargue la página
    
        const contacto = {
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            telefono: document.getElementById("telefono").value,
            correo: document.getElementById("correo").value,
            departamento: document.getElementById("departamento").value,
            ciudad: document.getElementById("ciudad").value,
            comentarios: document.getElementById("comentarios").value
        };
    
        try {
            const response = await fetch("http://localhost:8080/contacto/guardar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contacto)
            });

            if (response.ok) {
                Swal.fire({
                    title: "¡Éxito!",
                    text: "Tu mensaje ha sido enviado con éxito.",
                    icon: "success",
                    confirmButtonText: "OK"
                }).then(() => {
                    document.querySelector(".contact-form").reset();
                    window.location.reload(); // Recarga la pestaña automáticamente
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: "❌ Correo electrónico ya registrado o error en el envío.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: "Error",
                text: "❌ Error al enviar el formulario.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    });

});


//_________________________________________________________________
// CHANGE COLOR OF THE PAGE

document.addEventListener("DOMContentLoaded", function () {

    // Elements of text of the html marca
    const elementosRosaContacto = document.querySelectorAll(".queremos-escucharte, .schedule-button");
    const elementosBlancosContacto = document.querySelectorAll(".tu-opinion, .contact-form, .label, .input, textarea, #nombre, #apellido, #telefono, #correo, #departamento, #ciudad");
    const elementoCuadradoContacto = document.querySelectorAll(".contact-button");
    // Get inputs
    const camposContacto = document.querySelectorAll("#nombre, #apellido, #telefono, #correo, #departamento, #ciudad");
    const selectDepartamento = document.querySelector("#departamento");
    const selectCiudad = document.querySelector("#ciudad");


    function aplicarTema(modoOscuro) {
        if (modoOscuro) {
            elementosRosaContacto.forEach(el => el.style.color = "#ff335f"); // Vuelve a rosa
            elementosBlancosContacto.forEach(el => el.style.color = "#ffffff"); // Vuelve a blanco
            elementoCuadradoContacto.forEach(el => el.style.backgroundColor = "#ff335f");
            selectDepartamento.style.color = "#ff335f";
            selectCiudad.style.color = "#ff335f";
        } else {
            elementosRosaContacto.forEach(el => el.style.color = "#00289F"); // change to blue
            elementosBlancosContacto.forEach(el => el.style.color = "#000000"); // change to black
            elementoCuadradoContacto.forEach(el => el.style.backgroundColor = "#00289F");

            // change the line down of the inputs to black in light mode
            camposContacto.forEach(el => el.style.borderBottom = "0.3vh solid black");
            selectDepartamento.style.color = "#00289F";
            selectCiudad.style.color = "#00289F";
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
