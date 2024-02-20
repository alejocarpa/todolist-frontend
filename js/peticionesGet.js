const endpoint = 'http://proyectoeasy.shop/backend_todo';

/* Peticion para obtener los diferentes estados */
fetch(`${ endpoint }/estado/estado.php`, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
.then( json => {
    const selectEstados = document.getElementById('selectEstados');
    selectEstados.innerHTML = `<select id="estado" class="form-select form-select-sm"><option selected>Todos</option>${ json.results.map( estado => `<option value="${ estado.id_estado }">${ estado.nombre_estado}</option>`) }</select>`;
})
.catch(err => console.log(err));

/* Peticion para obtener los Usuarios */
fetch(`${ endpoint }/usuario/usuario.php`, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
.then( json => {
    const selectUsuarios = document.getElementById('selectUsuarios');
    selectUsuarios.innerHTML = `<select id="usuario" class="form-select form-select-sm"><option selected>Todos</option>${ json.results.map( usuario => `<option value="${ usuario.nombre_usuario_tarea }">${ usuario.nombre_usuario_tarea}</option>`) }</select>`;
})
.catch(err => console.log(err));

/* Peticion para obtener las tareas */
fetch(`${ endpoint }/tarea/tarea.php`, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
.then( json => {
    const cuerpoTareas = document.getElementById('cuerpoTareas');
    json.results.map( tarea => cuerpoTareas.innerHTML += `<tr><td>${ tarea.nombre_tarea }</td><td>${ tarea.nombre_usuario_tarea }</td><td>${ tarea.fecha_creacion_tarea }</td><td><div class="${ tarea.id_estado_tarea === '1' ? 'campoEstadoPendiente' : tarea.id_estado_tarea === '2' ? 'campoEstadoRealizada' : tarea.id_estado_tarea === '3' ? 'campoEstadoCancelada' : '' }">${ tarea.nombre_estado }</div></td><td><button type="button" class="btn btn-primary" onclick="editarTarea('${ tarea.id_tarea }', '${ tarea.nombre_tarea }', '${ tarea.nombre_usuario_tarea }', '${ tarea.id_estado_tarea }')" data-bs-toggle="modal" data-bs-target="#formularioTarea">Editar</button></td><td><button type="button" onclick="eliminarTarea('${ tarea.id_tarea }')" class="btn btn-danger">Eliminar</button></td></tr>` );
})
.catch(err => console.log(err));