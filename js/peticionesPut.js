const editarTarea = (id_tarea, nombre_tarea, nombre_usuario_tarea, id_estado_tarea) => {

    document.getElementById('nombreTarea').value = nombre_tarea;
    document.getElementById('nombreTarea').disabled = true;

    document.getElementById('nombreUsuario').value = nombre_usuario_tarea;
    document.getElementById('nombreUsuario').disabled = true;

    const tituloHeader = document.getElementById('headerModal');
    tituloHeader.innerHTML = '<h1 class="modal-title fs-5" id="exampleModalLabel">Editar Tarea</h1>';

    obtenerEstados( id_estado_tarea );

    const botonAccionTarea = document.getElementById('botonAccionTarea');
    botonAccionTarea.innerHTML = `<button type="button" class="btn btn-primary" onclick="actualizarTarea('${ id_tarea }')">Actualizar</button>`;
}

/* Peticion para actualizar las tareas */
const actualizarTarea = ( id_tarea ) => {

    const nombreTarea = document.getElementById('nombreTarea').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const estadoFormulario = document.getElementById('estadoFormulario').value;

    let _datos = {
        tarea: id_tarea,
        estado: estadoFormulario
    }

    fetch('http://proyectoeasy.shop/backend_todo/tarea/tarea.php', {
        method: "PUT",
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

const obtenerEstados = ( id_estado_tarea ) => {

    /* Peticion para obtener los diferentes estados */
    fetch(`${ endpoint }/estado/estado.php`, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then( json => {
        const selectEstados = document.getElementById('selectEstado');
        selectEstados.innerHTML = '<label for="estadoFormulario" class="form-label">Estado</label>';
        selectEstados.innerHTML += `<select id="estadoFormulario" class="form-select form-select">${ json.results.map( estado => `<option value="${ estado.id_estado }" ${ id_estado_tarea == estado.id_estado ? 'selected' : '' }>${ estado.nombre_estado}</option>`) }</select>`;
    })
    .catch(err => console.log(err));
}