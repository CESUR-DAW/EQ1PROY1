// var listaJugadores = [];



// //con esta funcion añadimos al jugador que introducimos en el input y lo almacenamos en un array
// function añadirJugador() {
//     var jugador = document.getElementById('jugador').value;
//     if(jugador != "" && jugador != "Introduce Jugador") {
        
//         listaJugadores.push(jugador); //añadimos jugadores

//         document.getElementById('jugador').value = ""; //volvemos a vaciar el input
//         mostrarLista();
//         return listaJugadores;
//     }else{
//         document.getElementById('jugador').value = "Introduce Jugador"; 
//     }
// }

// //esta funcion borra al jugador que coincide con lo introducido en el input
// function borrarJugador() {

//     var jugador = document.getElementById('jugador').value;
//     var indice = listaJugadores.indexOf(jugador);

//     if (indice > -1) { // Vemos que funciona bien por que si es -1 significa que no lo encuentra
//         listaJugadores.splice(indice, 1); // borramos el jugar del array

//     }
//     document.getElementById('jugador').value = ""; //volvemos a vaciar el input
//     mostrarLista();
//     return listaJugadores;
// }

// function mostrarLista() {
//     var lista = ""
//     listaJugadores.forEach(jugador => {
//         lista +="<li id='"+jugador+"'>"+jugador+"</li>"; 
//     });
//     document.getElementById('jugLista').innerHTML = lista;
// }

var array = [];

class entrada {
    constructor(titulo, fecha, hora, lugar, precio, numEntradas) {
        this.titulo = titulo;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.precio = precio;
        this.numEntradas= "";
    }
}

function validarDatos() {
    var datos = document.getElementsByClassName("dato");
    var valido = true;
    for(i=0; i<=datos.length; i++) {
        datos[i].style.backgroundColor = "white";
        datos[i].style.border = "2px solid black";
        if(datos[i].value == "") {
            datos[i].style.backgroundColor = "#F6CECE";
            datos[i].style.border = "3px solid red";
            valido = false;
        }
    }
    if(valido == true) {
        return true;
    }else {
        return false;
    }
}

function crearEntrada() {
    var titulo = document.getElementById("titulo").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var lugar = document.getElementById("lugar").value;
    var precio = document.getElementById("precio").value;
    var numEntradas = document.getElementById("numEntradas").value;

    const datos_entrada = new entrada(titulo, fecha, hora, lugar, precio, numEntradas);

    guardarEntrada(datos_entrada);
}

//esta funcion guarda la array con todos los objetos entrada en localStorage y la manda pintar
function guardarEntrada(datos) {
    array.push(datos);
    if(array.length == 0) {
        localStorage.setItem("entradas", JSON.stringify(array[0]));
    }else {
        localStorage.clear();
        localStorage.setItem("entradas", JSON.stringify(array));
        pintarEntradas(datos);
    }
}

//esta funcion recupera los datos de localStorage cada vez que se carga la pagina y los manda pintar
function obtenerEntrada() {
    var guardado = localStorage.getItem("entradas");
    var json = JSON.parse(guardado);
    if(json != null) {
        for(i=0; i<=json.length-1; i++) {
            array.push(json[i]);
            pintarEntradas(json[i]);
        }
    }
}

//pinta las entradas que se le van pasando
function pintarEntradas(entradas) {
    var prueba = document.createElement("div");
    prueba.setAttribute("class", "entradas");
    prueba.innerHTML = "<div class='entrada'><p>"+entradas.titulo+"</p><p>dia: "+entradas.fecha+"</p><p>Hora: "+entradas.hora+"</p></div>";
    var contenedor = document.getElementById("galeria");
    contenedor.appendChild(prueba);
}

function eliminarEntrada() {
    document.getElementById("entrada").style.display = "none";
}


