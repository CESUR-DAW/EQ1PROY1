//STORY 1

// Imprimir Usuarios
usuarios().then(arrayUsuarios => {
    mostrarUsuarios(arrayUsuarios);
});


//Guardamos los Usuarios en un Array
async function usuarios() {
    var arrayUsuarios = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
        })
        //Guardamos la respuesta en un array
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.log(error);
        })
    //Devolvemos el array para trabajar con este
    return arrayUsuarios;
}

function mostrarUsuarios(arrayUsuarios) {
    for (let i = 0; i < arrayUsuarios.length; i++) {
        document.getElementById("idUser").innerHTML += `<option value ='${arrayUsuarios[i].id}'>
        ${arrayUsuarios[i].id}: ${arrayUsuarios[i].name}</option>`

    }
}

// //Story 2

// Imprimir Comentarios 
function comentarios() {
    mostrarUsuarios().then(arrayUsuarios =>{
        mostrarComentarios().then(arrayComentarios =>{
            mostrarComentarios(arrayComentarios,arrayUsuarios);
        })
    });
}

































function select() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => crearFormulario(json))

    function crearFormulario(response) {
        var elArray = response;
        var elSelect = "<select id='idusu'>";
        for (var i = 0; i < elArray.length; i++) {
            elSelect += "<option value='" + elArray[i].id + "'>" + elArray[i].username + "</option>";
        }
        elSelect += "</select>";
        document.getElementById("prueba").innerHTML = elSelect;
    }
}

function exportadatos() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: document.getElementById("titulo").value,
            body: document.getElementById("comentario").value,
            /*userId: document.getElementById("idusu").value,*/
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}