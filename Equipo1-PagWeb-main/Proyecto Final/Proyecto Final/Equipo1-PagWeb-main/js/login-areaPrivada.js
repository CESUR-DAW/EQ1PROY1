
// var usuario = "user";
// var contraseña = "1234";
var intentos = 3;

//Esta funcion recoje el usuario y la contraseña de los inputs y las compara con las correctas
function login() {

    var passInput = document.getElementById('pass').value;
    var userInput = document.getElementById('user').value;
    var box = document.getElementById('recordar');

    //creamos un objeto con la contraseña y el email y lo pasamos a json
    var data = {};
    data["email"] = userInput;
    data["password"] = passInput;
    var json = JSON.stringify(data);

    //Hacemos la peticion a la API
    fetch("https://reqres.in/api/login", {
        method: 'POST',
        body: json,
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(response => response.json())
    .then(data => {
        if(data["token"] == "QpwL5tke4Pnpja7X4") {
            validaCheckbox(box,userInput,passInput);
            window.location.href = "areaPrivada.html";
        }else {
            intentosRestantes();
        }
    }) 
}

//funcion que resta intentos si se introducen datos erroneos
function intentosRestantes() {
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