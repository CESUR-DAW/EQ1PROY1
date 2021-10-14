var arrayJug = [];
var borrarEle;

//con esta funcion añadimos al jugador que introducimos en el input y lo almacenamos en un array
function añadirJugador() {
    var lista = "";
    var contList = arrayJug.length;
    var jugador = document.getElementById('jugador').value;

    //El jugador se introduce en la array dentro de una etiqueta <li> para mostrarlo como una lista y se le da un id que coincide con el valor 
    arrayJug[contList] = "<li id='"+jugador+"'>"+jugador+"</li><br>"; 
    contList++;

    //Se suman los jugadores en una sola cadena
    arrayJug.forEach(jug => {
        lista = lista+jug;
    });

    //Se introducen todas las lineas de la lista en su etiqueta <ol>
    document.getElementById('jugLista').innerHTML = lista;

    //volvemos a vaciar el input
    document.getElementById('jugador').value = "";

}

//esta funcion borra al jugador que coincide con lo introducido en el input
function borrarJugador() {

    var jugador = document.getElementById('jugador').value;
    var lista = "";

    if(arrayJug.includes("<li id='"+jugador+"'>"+jugador+"</li><br>")) {
        document.getElementById('mensaje_error').style.display = "none";
        var jugBorrado = arrayJug.indexOf("<li id='"+jugador+"'>"+jugador+"</li><br>");
   
        arrayJug.splice(jugBorrado, 1);//borra de la lista el jugador que coincide con el id
        
        //volvemos a reconstruir la lista despues de haber borrado el elemento
        arrayJug.forEach(jug => {
            lista = lista+jug;
        });

        //se pinta la nueva lista
        document.getElementById('jugLista').innerHTML = lista;
    }else {
        document.getElementById('mensaje_error').style.display = "block";
    }


    
}