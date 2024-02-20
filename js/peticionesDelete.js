const eliminarTarea = ( id_tarea ) => {

    let _datos = {
        tarea: id_tarea
    }

    fetch('http://proyectoeasy.shop/backend_todo/tarea/tarea.php', {
        method: "DELETE",
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