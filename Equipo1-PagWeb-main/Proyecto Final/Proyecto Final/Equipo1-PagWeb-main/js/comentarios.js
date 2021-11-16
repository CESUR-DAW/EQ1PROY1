async function cargar(){
1
    tabla().then((prueba) => {
        tabla(prueba);
    })

}



async function tabla() {
    prueba = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {
            var usuario = `<tr><th>ID</th><th>Nombre</th><th>Apellidos</th></tr>`;
            json.forEach(user => {
                usuario += `<tr><td>${user.id} </td><td>${user.username} </td><td>${user.name} </td></tr>`;

            });
            document.getElementById("users").innerHTML = usuario;
        })
        .catch((error) => {
            console.log(error);
        })
        return prueba;
}

// function comentarios() {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//         .then(response => response.json())
//         .then(json => {
//             var coments;
//             json.forEach(user => {
//                 coments = `<td>Comentario ${user.id}</td>`;
//             })
//             document.getElementById("comentarios").innerHTML = coments;
//         })
// }

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