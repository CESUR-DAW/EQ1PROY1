
var usuario = "dani";
var contraseña = "pass1";
var intentos = 3;
var arrayJug = [];
var borrarEle;

//Esta funcion recoje el usuario y la contraseña de los inputs y las compara con las correctas
function login() {
    var passInput = document.getElementById('pass').value;
    var userInput = document.getElementById('user').value;
    var loginValido = false;

    //comprobamos que tanto el usuario como el password han sido introducidos
    if(passInput != '' && userInput != '') {
        //Si la contraseña es correcta la variable cambia a true permitiendonos el acceso
        if(contraseña == passInput && usuario == userInput) {
            loginValido = true;
        //Si la contraseña no es correcta se resta un intento y se muestra un mensaje indicandolo
        }else {
            if(intentos > 1) {
                intentos--;
                document.getElementById('mensajeLogin').innerHTML = "Contraseña erronea, siga intentandolo, quedan "+intentos+" intentos";
                document.getElementById('mensajeLogin').style.display = "block";
                document.getElementById('pass').value = '';
                document.getElementById('user').value = '';
            
            //Al agotar los 3 intentos nos redirige a la pagina HOME
            }else {
                window.location.href = "index.html";
            }
        }

        //Por ultimo se comprueba que el login es valido y se redirige a la pagina deseada
        if(loginValido == true) {
            window.location.href = "areaPrivada.html";
        }
    //si falta algun campo por rellenar manda un mensaje de aviso
    }else {
        document.getElementById('mensajeLogin').innerHTML = "Por favor rellene todos los campos";
        document.getElementById('mensajeLogin').style.display = "block";
    }
}

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

