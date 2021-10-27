
var usuario = "user";
var contraseña = "1234";
var intentos = 3;

//Esta funcion recoje el usuario y la contraseña de los inputs y las compara con las correctas
function login() {
    var passInput = document.getElementById('pass').value;
    var userInput = document.getElementById('user').value;
    var box = document.getElementById('recordar');
    var loginValido = false;
    
    //comprobamos que tanto el usuario como el password han sido introducidos
    if (passInput != '' && userInput != '') {
        //Si la contraseña es correcta la variable cambia a true permitiendonos el acceso
     
        if (contraseña == passInput && usuario == userInput) {
            validaCheckbox(box,userInput,passInput);
 
            loginValido = true;
           
        
            //Si la contraseña no es correcta se resta un intento y se muestra un mensaje indicandolo
        } else {
            if (intentos > 1) {
                intentos--;
                document.getElementById('mensajeLogin').innerHTML = "Contraseña erronea, siga intentandolo, quedan " + intentos + " intentos";
                document.getElementById('mensajeLogin').style.display = "block";
                document.getElementById('pass').value = '';
                document.getElementById('user').value = '';



                //Al agotar los 3 intentos nos redirige a la pagina HOME
            } else {
                window.location.href = "index.html";
            }
        }

        //Por ultimo se comprueba que el login es valido y se redirige a la pagina deseada
        if (loginValido == true) {
            window.location.href = "areaPrivada.html";
        }
        //si falta algun campo por rellenar manda un mensaje de aviso
    } else {
        document.getElementById('mensajeLogin').innerHTML = "Por favor rellene todos los campos";
        document.getElementById('mensajeLogin').style.display = "block";
    }  
}
//Esta función valida el checkbox
function validaCheckbox(checkBox,nombreUsuario,contraseñaUsuario){
    
    checkBox = document.getElementById('recordar');
    
    if(checkBox.checked){
       
        localStorage.setItem("usuarioCheck",nombreUsuario);
        localStorage.setItem("contraseñaCheck",contraseñaUsuario);
    }    
}

//Esta función rellena el formulario con los datos guardados en el localStorage
function rellenarForm(){
    document.getElementById('user').value= localStorage.getItem("usuarioCheck");
    document.getElementById('pass').value= localStorage.getItem("contraseñaCheck");

} 