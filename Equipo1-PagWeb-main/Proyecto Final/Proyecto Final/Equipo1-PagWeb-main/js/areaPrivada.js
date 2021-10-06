
var usuario = "dani";
var contraseña = "pass1";
var intentos = 3;
var contador = 0;

function login() {
    var passInput = document.getElementById('pass').value; //almacenamos el password en esta variable
    var userInput = document.getElementById('user').value; //almacenamos el usuario en esta variable
    var loginValido = false; //creamos la variable para determinar si el login ha tenido exito o no

    //Este if comprueba que tanto el password como el usuario es correcto
    if(contraseña == passInput && usuario == userInput) {
        loginValido = true; //si todo es correcto valida el login
    }else {
        //si es erroneo el contador de fallos aumenta y se resta al nº de intentos total
        if(contador < 2) {
            contador++;
            //el contenido del mensaje de login se cambia en cada intento con el numero actualizado de intentos restantes
            document.getElementById('mensajeLogin').innerHTML = "Contraseña erronea, siga intentandolo, quedan "+(intentos-contador)+" intentos";
            document.getElementById('mensajeLogin').style.display = "block"; //el mensaje de login pasa de estar oculto a ser visible
            document.getElementById('pass').value = ''; //se borra la contraseña erronea
            
        }else { //una vez que se falla 3 veces se redirige a la pagina inicial
            window.location.href = "index.html";
        }
    }
    //Si el login ha sido validado correctamente se redirige a la pagina area privada
    if(loginValido == true) {
        window.location.href = "areaPrivada.html";
    }
}