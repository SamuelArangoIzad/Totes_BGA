document.addEventListener("DOMContentLoaded", function() {
    function actualizarModelos() {
        // Obtener el ID de la marca desde la URL
        const idMarca = window.location.pathname.split('/').pop();

        // Verificar si idMarca es un número válido
        if (isNaN(idMarca) || idMarca === "") {
            console.error("ID de marca no válido");
            return;
        }

        fetch(`/api/modelosUpdate/${idMarca}`)  // Llamar al endpoint con el ID de la marca
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la respuesta del servidor");
                }
                return response.json();
            })
            .then(data => {
                let contenedor = document.querySelector(".contenedor-modelos");
                contenedor.innerHTML = ""; // Limpiar contenido antes de agregar los nuevos modelos

                data.forEach(modelo => {
                    let div = document.createElement("div");
                    div.classList.add("modelo-item-carro");

                    let img = document.createElement("img");
                    img.src = `http://localhost:8081${modelo.imagenUrl}`;
                    img.alt = `Imagen del modelo`;
                    img.classList.add("modelo-item-image");

                    let nombre = document.createElement("p");
                    nombre.textContent = modelo.nombre;
                    nombre.classList.add("modelo-nombre");

                    let estado = document.createElement("p");
                    estado.textContent = modelo.nuevoUsado;
                    estado.classList.add("modelo-nuevoUsado");

                    let precio = document.createElement("p");
                    precio.textContent = `COP $${modelo.costo.toLocaleString()}`;
                    precio.classList.add("modelo-Costo");

                    let link = document.createElement("a");
                    link.href = `/carro/detalle?nombreModelo=${encodeURIComponent(modelo.nombre)}`;
                    link.classList.add("boton-informacion");
                    link.textContent = "INFORMACIÓN";

                    div.appendChild(img);
                    div.appendChild(nombre);
                    div.appendChild(estado);
                    div.appendChild(precio);
                    div.appendChild(link);

                    contenedor.appendChild(div);
                });
            })
            .catch(error => console.error("Error al obtener modelos:", error));
    }

    // Actualizar modelos cada 5 segundos
    setInterval(actualizarModelos, 5000);

    // Cargar los modelos al inicio
    actualizarModelos();
});
