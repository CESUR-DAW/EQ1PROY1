// var contraseña = "jeringa";
// var introContra = prompt("Introduzca la contraseña. ¿Cuál es el instrumento que se mete y deja líquido dentro?");
// var contador = 3;
// while (contraseña != introContra) {

//     introContra = prompt("Contraseña incorrecta le quedan "+contador+" intentos");
//     contador--;
 
//     if (contador == 0) {
//         alert("La contraseña introducida es incorrecta y ha agotado sus intentos. Sera redireccionado a la pagina de incio");
//         window.location.href = "index.html";
//         break;
//     }
// }

var usuario = "dani";
var contraseña = "pass1";
var intentos = 3;
var contador = 0;


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
        if(contador < 2) {
            contador++;
            document.getElementById('mensajeLogin').innerHTML = "Contraseña erronea, siga intentandolo, quedan "+(intentos-contador)+" intentos";
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