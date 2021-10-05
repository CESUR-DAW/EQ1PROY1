var contraseña = "jeringa";
var introContra = prompt("Introduzca la contraseña. ¿Cuál es el instrumento que se mete y deja líquido dentro?");
var contador = 3;
while (contraseña != introContra) {

    introContra = prompt("Contraseña incorrecta le quedan "+contador+" intentos");
    contador--;
 
    if (contador == 0) {
        alert("La contraseña introducida es incorrecta y ha agotado sus intentos. Sera redireccionado a la pagina de incio");
        window.location.href = "index.html";
        break;
    }
}