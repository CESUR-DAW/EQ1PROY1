
function sorteo() { //funcion sorteo para intentar acertar el numero aleatorio
    var numero = document.getElementById("sorteo-input").value;//el numero escrito en el formulario entra aquí
    var premio = Math.floor(Math.random() * 10) + 1; //el número se genera random cada vez que se ejecuta la función
    var ganador = false;


    if (isNaN(numero) || numero <= 0 || numero > 10) { //Lector para ver si escribes letras en los numeros, si lo pones saltará el mensaje
        document.getElementById("texto-resultado").innerText = "Introduzca un numero entre 1 y 10";
    } else if (numero.length < 0) {
        document.getElementById("texto-resultado").innerText = "Introduzca un valor numerico.";
    }
    else {
        if (numero == premio) {
            ganador = true;
        }
        mostrarMensajeSorteo(ganador);
    }
}


function mostrarMensajeSorteo(ganador) { //Funcion muestra un mensaje si el numero que pones es igual al ganador

    if (ganador) {
        document.getElementById("texto-resultado").innerText = "El resultado fue: "+"Enhorabuena ha ganado el sorteo. Su numero coincide con el numero ganador.";

    }
    else {

        document.getElementById("texto-resultado").innerText = "El resultado fue: "+"Lo siento, siga intentando";
    }
}