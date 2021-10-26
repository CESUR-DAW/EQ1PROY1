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

    array.push(datos_entrada);
    guardarEntrada();
}

//esta funcion guarda la array con todos los objetos entrada
function guardarEntrada() {
    localStorage.setItem("entradas", JSON.stringify(array));
    
}


//esta funcion devuelve la array con todos los objetos entrada guardados
function obtenerEntrada() {
    var guardado = localStorage.getItem("entradas");
    return guardado;
}

// Esta funcion inserta en el html las entradas
function mostrarEntradas(){
    document.getElementById("resumenEntradas").innerHTML = obtenerEntrada();
}