// var listaJugadores = [];



// //con esta funcion añadimos al jugador que introducimos en el input y lo almacenamos en un listaEntradas
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
//         listaJugadores.splice(indice, 1); // borramos el jugar del listaEntradas

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

var listaEntradas = [];
var contador;

class entrada {
    constructor(titulo, fecha, hora, lugar, precio, numEntradas) {
        this.titulo = titulo;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.precio = precio;
        this.numEntradas = parseInt(numEntradas);
    }
}

function validarDatos() {
    var datos = document.getElementsByClassName("dato");
    var valido = true;
    for (i = 0; i <= datos.length; i++) {
        datos[i].style.backgroundColor = "white";
        datos[i].style.border = "2px solid black";
        if (datos[i].value == "") {
            datos[i].style.backgroundColor = "#F6CECE";
            datos[i].style.border = "3px solid red";
            valido = false;
        }
    }
    if (valido == true) {
        return true;
    } else {
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
    if (titulo.length >= 1 && fecha.length >= 1 && lugar.length >= 1 && precio.length >= 1 && numEntradas.length >= 1) {
        const datos_entrada = new entrada(titulo, fecha, hora, lugar, precio, numEntradas);

        guardarEntrada(datos_entrada);
    }

}

//esta funcion guarda la array con todos los objetos entrada en localStorage y la manda pintar
function guardarEntrada(datos) {
    listaEntradas.push(datos);
    if (listaEntradas.length == 0) {
        localStorage.setItem("entradas", JSON.stringify(listaEntradas[0]));
    } else {
        // localStorage.clear();//limpiamos el localStorage
        localStorage.setItem("entradas", JSON.stringify(listaEntradas)); //guardamos la nueva listaEntradas en localStorage
        pintarEntradas();
    }
}

//esta funcion recupera los datos de localStorage cada vez que se carga la pagina y los manda pintar
function obtenerEntrada() {
    var guardado = localStorage.getItem("entradas");
    var json = JSON.parse(guardado);
    if (json != null) {
        listaEntradas = [];
        for (i = 0; i <= json.length - 1; i++) {
            listaEntradas.push(json[i]);
        }
        contador = listaEntradas.length;
    }
}

// pinta las entradas que se le van pasando
function pintarEntradas() {
    obtenerEntrada();
    document.getElementById("galeria").innerHTML = "";
    for (i = 0; i <= listaEntradas.length - 1; i++) {
        var prueba = document.createElement("div");
        var entrada = listaEntradas[i];
        prueba.setAttribute("class", "entradas");
        prueba.innerHTML = "<div id='" + entrada.value + "' class='entrada'><p>Id: " + listaEntradas.indexOf(entrada) + "</p><p>" + entrada.titulo + "</p><p>dia: " + entrada.fecha + "</p><p>Hora: " + entrada.hora + "</p><p>lugar: " + entrada.lugar + "</p><p>Precio: " + entrada.precio + "</p><p>Nºentradas: " + entrada.numEntradas + "</p></div>";
        var contenedor = document.getElementById("galeria");
        contenedor.appendChild(prueba);
    }
}

//elimina la entrada seleccionada de la array y de localStorage
function borrarEntrada() {
    var id_borrar = document.getElementById("id_borrar").value;
    for(i=0; i<=listaEntradas.length-1; i++) {
        if(listaEntradas[i].ident == id_borrar) {
            listaEntradas.splice(i, 1);
            localStorage.removeItem("entradas");
            localStorage.setItem("entradas", JSON.stringify(listaEntradas));
            document.getElementById(""+id_borrar).remove();
            document.getElementById("id_borrar").value = "";
            pintarEntradas();
        }
    }
}

//quita el cuadro de crear entrada y muestra el de eliminar entradas
function eliminarEntrada() {
    document.getElementById("entrada").style.display = "none";
    document.getElementById("borrar_entrada").style.display = "block";
}

//quita el cuadro de eliminar entrada y muestra el de crear entradas
function showEntrada() {
    document.getElementById("entrada").style.display = "block";
    document.getElementById("borrar_entrada").style.display = "none";
}