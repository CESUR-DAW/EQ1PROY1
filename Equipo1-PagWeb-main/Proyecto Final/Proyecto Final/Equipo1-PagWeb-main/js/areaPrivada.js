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
var contador;

class entrada {
    constructor(titulo, fecha, hora, lugar, precio, numEntradas) {
        this.titulo = titulo;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.precio = precio;
        this.numEntradas = "";
        this.ident = Math.floor(Math.random() * 9999)+1000;
    }
}

//valida que se hayan completado todos los imputs necesarios para crear una entrada
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

//obtiene los valores de los input y crea un objeto entrada con ellos
function crearEntrada() {
    //if(validarDatos()) {
        var titulo = document.getElementById("titulo").value;
        var fecha = document.getElementById("fecha").value;
        var hora = document.getElementById("hora").value;
        var lugar = document.getElementById("lugar").value;
        var precio = document.getElementById("precio").value;
        var numEntradas = document.getElementById("numEntradas").value;
        var ident = Math.floor(Math.random() * 9999)+1000;

        const datos_entrada = new entrada(titulo, fecha, hora, lugar, precio, numEntradas);
        guardarEntrada(datos_entrada);
    //}
}

//esta funcion guarda la array con todos los objetos entrada en localStorage y la manda pintar
function guardarEntrada(datos) {
    array.push(datos);
    if(array.length == 0) {
        localStorage.setItem("entradas", JSON.stringify(array[0]));
    }else {
        localStorage.removeItem("entradas");;//limpiamos el localStorage
        localStorage.setItem("entradas", JSON.stringify(array));//guardamos la nueva array en localStorage
        pintarEntradas();
    }
}

//esta funcion recupera los datos de localStorage cada vez que se carga la pagina y los almacena en la array
function obtenerEntrada() {
    var guardado = localStorage.getItem("entradas");
    var json = JSON.parse(guardado);
    if(json != null) {
        array = [];
        for(i=0; i<=json.length-1; i++) {
            array.push(json[i]);
        }
        contador = array.length;
    }
}

//pinta las entradas contenidas en el array
function pintarEntradas() {
    obtenerEntrada();
    document.getElementById("galeria").innerHTML = "";
    for(i=0; i<=array.length-1; i++) {
        var prueba = document.createElement("div");
        prueba.setAttribute("class", "entradas");
        prueba.innerHTML = "<div id='"+array[i].ident+"' class='entrada'><p class='titulo_entrada'>"+array[i].titulo+"</p><p>dia: "+array[i].fecha+"</p><p>Hora: "+array[i].hora+"</p><p>Lugar: "+array[i].lugar+"<p>Id: "+array[i].ident+"</p></div>";
        var contenedor = document.getElementById("galeria");
        contenedor.appendChild(prueba);
    }   
}

//elimina la entrada seleccionada de la array y de localStorage
function borrarEntrada() {
    var id_borrar = document.getElementById("id_borrar").value;
    for(i=0; i<=array.length-1; i++) {
        if(array[i].ident == id_borrar) {
            array.splice(i, 1);
            localStorage.removeItem("entradas");
            localStorage.setItem("entradas", JSON.stringify(array));
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




