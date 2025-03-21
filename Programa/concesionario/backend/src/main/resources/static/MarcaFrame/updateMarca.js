document.addEventListener("DOMContentLoaded", function() {
    function actualizarMarcas() {
        fetch("/api/marcas")  // Llama al nuevo endpoint
            .then(response => response.json())
            .then(data => {
                let contenedor = document.querySelector(".contenedor-marcas");
                contenedor.innerHTML = ""; // Limpiar contenido antes de agregar el nuevo

                data.forEach(marca => {
                    let div = document.createElement("div");
                    div.classList.add("marca-item");

                    let link = document.createElement("a");
                    link.href = `/modelos/${marca.id_marca}`;
                    link.classList.add("marca-link");

                    let img = document.createElement("img");
                    img.src = `http://localhost:8081${marca.imagenUrl}`;
                    img.alt = `Imagen de la marca`;
                    img.classList.add("marca-item-image");

                    let nombre = document.createElement("p");
                    nombre.textContent = marca.nombre;
                    nombre.classList.add("marca-nombre");

                    link.appendChild(img);
                    link.appendChild(nombre);
                    div.appendChild(link);
                    contenedor.appendChild(div);
                });
            })
            .catch(error => console.error("Error al obtener marcas:", error));
    }

    // Llamar la función cada hora para actualizar en tiempo real 3600000
    setInterval(actualizarMarcas, 5000);

    // Cargar las marcas al inicio
    actualizarMarcas();
});