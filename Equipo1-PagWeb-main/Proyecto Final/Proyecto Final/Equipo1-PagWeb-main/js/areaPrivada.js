
var usuario = "dani";
var contraseña = "pass1";
var intentos = 3;
var arrayJug = [];


if(validado == true) {
    window.location.href = "areaPrivada.html";
}

function login() {
    var passInput = document.getElementById('pass').value;
    var userInput = document.getElementById('user').value;
    var loginValido = false;

    if(contraseña == passInput && usuario == userInput) {
        loginValido = true;
    }else {
        if(intentos > 1) {
            intentos--;
            document.getElementById('mensajeLogin').innerHTML = "Contraseña erronea, siga intentandolo, quedan "+intentos+" intentos";
            document.getElementById('mensajeLogin').style.display = "block";
            document.getElementById('pass').value = '';
            
        }else {
            window.location.href = "index.html";
        }
    }

    if(loginValido == true) {
        window.location.href = "areaPrivada.html";
    }
}

function añadirJugador() {
    var lista = "";
    var contList = arrayJug.length;
    var jugador = document.getElementById('jugador').value;
    arrayJug[contList] = "<li id='"+jugador+"'>"+jugador+"</li><br>";
    contList++;

    arrayJug.forEach(jug => {
        lista = lista+jug;
    });

    document.getElementById('jugLista').innerHTML = lista;

    document.getElementById('jugador').value = "";

}

function borrarJugador() {
    var jugador = document.getElementById('jugador').value;
    var lista = "";
    var jugBorrado = arrayJug.indexOf("<li id='"+jugador+"'>"+jugador+"</li><br>");
   
    arrayJug.splice(jugBorrado, 1);
    
    arrayJug.forEach(jug => {
        lista = lista+jug;
    });

    document.getElementById('jugLista').innerHTML = lista;
}