const nuevaTarea = () => {

    const tituloHeader = document.getElementById('headerModal');

    tituloHeader.innerHTML = '<h1 class="modal-title fs-5" id="exampleModalLabel">Nueva Tarea</h1>';

    const botonAccionTarea = document.getElementById('botonAccionTarea');
    botonAccionTarea.innerHTML = '<button type="button" class="btn btn-primary" onclick="guardarTarea()">Guardar</button>';
}

const guardarTarea = () => {

    const nombreTarea = document.getElementById('nombreTarea').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value;

    let _datos = {
        nombre: nombreTarea,
        nombre_usuario: nombreUsuario
    }

    fetch('http://proyectoeasy.shop/backend_todo/tarea/tarea.php', {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => {
            if (json.results?.id) {
                location.reload();
            }
        })
        .catch(err => console.log(err));
}