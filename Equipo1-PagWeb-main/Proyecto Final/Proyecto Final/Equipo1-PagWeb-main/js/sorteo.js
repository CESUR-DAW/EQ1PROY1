
function sorteo() { //funcion sorteo para intentar acertar el numero aleatorio
    var numero = document.getElementById("sorteo-input").value;//el numero escrito en el formulario entra aquí
    var premio = Math.floor(Math.random() * 10) + 1; //el número se genera random cada vez que se ejecuta la función
    var ganador = false;
    

    if (isNaN(numero)) { //Lector para ver si escribes letras en los numeros, si lo pones saltará el mensaje
        document.getElementById("texto-resultado").innerText = "No se permiten letras";
    } else {
        if (numero == premio) {
            ganador = true;
        }
        mostrarMensajeSorteo(ganador);
    }


}


function mostrarMensajeSorteo(ganador) { //Funcion muestra un mensaje si el numero que pones es igual al ganador
    if (ganador) {
        document.getElementById("texto-resultado").innerText = "Enhorabuena";

    }
    else {
        document.getElementById("texto-resultado").innerText = "Lo siento";
    }
}