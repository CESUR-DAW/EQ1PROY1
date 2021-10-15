var listaJugadores = [];
var borrarEle;

//con esta funcion añadimos al jugador que introducimos en el input y lo almacenamos en un array
function añadirJugador() {
    // var lista = "";
    // var contList = listaJugadores.length;
    // var jugador = document.getElementById('jugador').value;

    // //El jugador se introduce en la array dentro de una etiqueta <li> para mostrarlo como una lista y se le da un id que coincide con el valor 
    // listaJugadores[contList] = "<li id='"+jugador+"'>"+jugador+"</li><br>"; 
    // contList++;

    // //Se suman los jugadores en una sola cadena
    // listaJugadores.forEach(jug => {
    //     lista = lista+jug;
    // });

    // //Se introducen todas las lineas de la lista en su etiqueta <ol>
    // document.getElementById('jugLista').innerHTML = lista;

    // //volvemos a vaciar el input
    // document.getElementById('jugador').value = "";

    var jugador = document.getElementById('jugador').value;
    listaJugadores.push(jugador); //añadimos jugadores

    console.log(listaJugadores);

    document.getElementById('jugador').value = ""; //volvemos a vaciar el input
    mostrarLista();
    return listaJugadores;

}

//esta funcion borra al jugador que coincide con lo introducido en el input
function borrarJugador() {

    // var jugador = document.getElementById('jugador').value;
    // var lista = "";

    // if(listaJugadores.includes("<li id='"+jugador+"'>"+jugador+"</li><br>")) {
    //     document.getElementById('mensaje_error').style.display = "none";
    //     var jugBorrado = listaJugadores.indexOf("<li id='"+jugador+"'>"+jugador+"</li><br>");

    //     listaJugadores.splice(jugBorrado, 1);//borra de la lista el jugador que coincide con el id

    //     //volvemos a reconstruir la lista despues de haber borrado el elemento
    //     listaJugadores.forEach(jug => {
    //         lista = lista+jug;
    //     });

    //     //se pinta la nueva lista
    //     document.getElementById('jugLista').innerHTML = lista;
    // }else {
    //     document.getElementById('mensaje_error').style.display = "block";
    // }

    var jugador = document.getElementById('jugador').value;
    var indice = listaJugadores.indexOf(jugador);

    if (indice > -1) { // Vemos que funciona bien por que si es -1 significa que no lo encuentra
        listaJugadores.splice(indice, 1); // borramos el jugar del array

    }
    console.log(listaJugadores);
    document.getElementById('jugador').value = ""; //volvemos a vaciar el input
    mostrarLista();
    return listaJugadores;
}

function mostrarLista() {
    var lista = ""
    listaJugadores.forEach(jugador => {
        lista +=jugador; 
    });
    document.getElementById('jugLista').innerHTML = listaJugadores;
    
    
}