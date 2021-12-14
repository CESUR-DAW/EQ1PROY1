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
        .then((jsonResponse) => {
            return jsonResponse;
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
    mostrarUsuarios().then(arrayUsuarios => {
        mostrarComentarios().then(arrayComentarios => {
            mostrarTodo(arrayComentarios, arrayUsuarios);
        })
    });
}

function mostrarComentarios() {
    var arrayComentarios = await fetch("https://jsonplaceholder.typicode.com/posts")

        .then((response) => {
            return response.json();
        })

        .then((jsonResponse) => {
            return jsonResponse;
        })
        .catch((error) => {
            console.log(error);
        });
    return arrayComentarios;
}
//AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
function mostrarTodo(arrayComentarios, arrayUsuarios) {
    //variable para contabilizar los comentarios y su contenido
    y = 1;

    //con este 1er for recorremos los la api de usuarios imprimiendo el usuario id y el nombre
    for (i = 0; i < arrayUsuarios.length; i++) {

        document.getElementById("idUser").innerHTML += `
        <hr>
         <h2 class="usuarioTitulo">${arrayUsers[i].name}. Id de usuario  ${arrayUsers[i].id}</h2>
         `
            // este segundo for recorre el post 
        for (x = 0; x < arrayPost.length; x++) {
            //comprobando si el comentario coincide con el id del usuario 
            //en caso de ser asi imprimimos todos sus titulos y comentarios
            if (arrayPost[x].userId == arrayUsers[i].id) {

                contenido.innerHTML += `
                <h3 class="comentarioTitulo">Comentario ${y} : ${arrayPost[x].title}</h3>

                <p>El contenido del comentario ${y}  es :  ${arrayPost[x].body}</p>
              
                `
                    //aumentamos la variable por cada nuevo comentario
                y++;
            }

        }
        //gualamos la variable a 1 para que al vovler a contabilizar vuelva a empezar por el 1
        y = 1;

    }
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