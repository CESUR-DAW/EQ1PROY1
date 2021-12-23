//STORY 1

// Imprimir Usuarios
usuarios().then(arrayUsuarios => {
    mostrarUsuarios(arrayUsuarios);
});

// Imprimir Comentarios 
function comentarios() {
    usuarios().then(arrayUsuarios => {
        mostrarComentarios().then(arrayPost => {
            mostrarTodo(arrayPost, arrayUsuarios);
        })
    });
}
//Guardamos los Usuarios en un Array
async function usuarios() {
    var arrayUsuarios;
    var arrayUsuarios = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
        })
        //Guardamos la respuesta en un array
        .then((respuesta) => {
            return respuesta;
        })
        .catch((error) => {
            console.log("Hubo un problema con la petición Fetch" + error);
        })
    //Devolvemos el array para trabajar con este
    return arrayUsuarios;
}



function mostrarUsuarios(arrayUsuarios) {
    console.log(arrayUsuarios);
    for (i = 0; i < arrayUsuarios.length; i++) {
        document.getElementById("idUser").innerHTML += `<option value ='${arrayUsuarios[i].id}'>
        ${arrayUsuarios[i].id}: ${arrayUsuarios[i].name}</option>`

    }
}

// //Story 2

//Guardamos los comentarios en un Array
async function mostrarComentarios() {
    // Llamamos a la api con fetch (crea una promesa)
    var arrayPost;
    // Promesa, recogemos la respuesta con them
    var arrayPost = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();
        })
        // guardamos la respuesta .data en un array
        .then((respuesta) => {

            return respuesta;

        })
        .catch((error) => {
            console.log("Hubo un problema con la petición Fetch" + error);
        });
    return arrayPost;
}


function mostrarTodo(arrayPost, arrayUsuarios) {
    //contador de comentarios
    contador = 1;

    //con este  for recorremos los  usuarios imprimiendo el usuario  y el nombre
    for (i = 0; i < arrayUsuarios.length; i++) {

        document.getElementById("comentarios").innerHTML +=
            ` <hr> <h2 class="usuarioTitulo">${arrayUsuarios[i].name}. Id de usuario  ${arrayUsuarios[i].id}</h2> `
        // este  for recorre el post  y comprueba si el comentario coincide con el id del usuario 
        for (x = 0; x < arrayPost.length; x++) {
            //imprimimos todos sus titulos y comentarios
            if (arrayPost[x].userId == arrayUsuarios[i].id) {
                document.getElementById("comentarios").innerHTML += ` <h3>Comentario ${contador} : ${arrayPost[x].title}</h3>
                <p><b>El contenido del comentario ${contador}  es </b>:  ${arrayPost[x].body}</p> `
                //aumentamos la variable por cada  comentario
                contador++;
            }
        }
        //reiniciamos el contador
        contador = 1;
    }
}

//Story 3

var datosForm = document.getElementById("formComent");

//Vemos cuando el usuario pulsa el boton enviar

datosForm.addEventListener('submit', function (e) {

    //Desactivamos el submit
    e.preventDefault();

    //Subimos a la api
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: document.getElementById("titulo").value,
            body: document.getElementById("comentario").value,
            userId: document.getElementById("idUser").value,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            //actualizamos el array con los datos para volver a imprimir
            //con el nuevo comentario
            usuarios().then(arrayUsuarios => {
                mostrarComentarios().then(arrayPost => {
                    //Añade el nuevo post al array de post
                    arrayPost.push(json);
                    //Borra todo el div con contenido
                    var cuerpo = document.getElementById("comentarios")
                    borraElementosHTML(cuerpo);
                    //Vuelve a imprimirlo actualizado
                    mostrarTodo(arrayPost, arrayUsuarios);
                })
            });
        });
});

//Borra la informacion html previa de los usuarios
function borraElementosHTML(elementoPadre) {
    while (elementoPadre.firstChild) {
        elementoPadre.removeChild(elementoPadre.lastChild);
    }
}



//NO SE SABE SUS FUNCIONES

// function select() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json => crearFormulario(json))

//     function crearFormulario(response) {
//         var elArray = response;
//         var elSelect = "<select id='idusu'>";
//         for (var i = 0; i < elArray.length; i++) {
//             elSelect += "<option value='" + elArray[i].id + "'>" + elArray[i].username + "</option>";
//         }
//         elSelect += "</select>";
//         document.getElementById("prueba").innerHTML = elSelect;
//     }
// }

// function exportadatos() {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: document.getElementById("titulo").value,
//             body: document.getElementById("comentario").value,
//             /*userId: document.getElementById("idusu").value,*/
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// }