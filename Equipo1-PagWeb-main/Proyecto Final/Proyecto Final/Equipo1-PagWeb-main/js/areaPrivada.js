var listaJugadores = [];
var borrarEle;

//con esta funcion añadimos al jugador que introducimos en el input y lo almacenamos en un array
function añadirJugador() {
    var jugador = document.getElementById('jugador').value;
    if(jugador != "" && jugador != "Introduce Jugador") {
        
        listaJugadores.push(jugador); //añadimos jugadores

        document.getElementById('jugador').value = ""; //volvemos a vaciar el input
        mostrarLista();
        return listaJugadores;
    }else{
        document.getElementById('jugador').value = "Introduce Jugador"; 
    }
}

//esta funcion borra al jugador que coincide con lo introducido en el input
function borrarJugador() {

    var jugador = document.getElementById('jugador').value;
    var indice = listaJugadores.indexOf(jugador);

    if (indice > -1) { // Vemos que funciona bien por que si es -1 significa que no lo encuentra
        listaJugadores.splice(indice, 1); // borramos el jugar del array

    }
    document.getElementById('jugador').value = ""; //volvemos a vaciar el input
    mostrarLista();
    return listaJugadores;
}

function mostrarLista() {
    var lista = ""
    listaJugadores.forEach(jugador => {
        lista +="<li id='"+jugador+"'>"+jugador+"</li>"; 
    });
    document.getElementById('jugLista').innerHTML = lista;
    
    
}