function bienvenidoAficionado() {
    var nombre = document.getElementById('nombre').value; //Recoge en la variable "nombre", los datos introducidos por el usuario en el campo "nombre" del formulario.
    var year = document.getElementById('year').value; //Recoge en la variable "year", los datos introducidos por el usuario en el campo "Fecha de inscripcion" del formulario.
    var fechaIntroducida = new Date(year); // La fecha pasada por date la desglosa
    var calculoAños = calcularAños(fechaIntroducida);

    if (nombre.length > 0 && year.length > 0 && calculoAños >= 0) {
        mostrarMensaje(nombre, calculoAños);
        mostrarTipoAficionado(calculoAños);
    } else {
        document.getElementById('mensajeBienvenida').innerHTML = "Introduzca datos validos.";
    }
}

function mostrarMensaje(nombre, calculoAños) { // Mostramos el mensaje de bienvenida

    if (window.navigator.language === 'es-ES') { // Comparamos el idioma del navegador de cada usario.
        document.getElementById('mensajeBienvenida').innerHTML = "Bienvenid@ a la pagina Aficionados Usuario: " + nombre + " usted lleva en el club: " + calculoAños + " años";
    } else if (window.navigator.language === 'fr') {
        document.getElementById('mensajeBienvenida').innerHTML = "Bienvenue sur la page Fans d'utilisateurs : " + nombre + " vous portez dans le club: " + calculoAños + " années";

    } else {
        document.getElementById('mensajeBienvenida').innerHTML = "Welcome to the page Fans User: " + nombre + " you've been in the club for: " + calculoAños + " years";
    }
}

function mostrarTipoAficionado(year) { //Mensaje del tipo aficionado
    if (year >= 0 && year <= 2) {
        document.getElementById('tipoAficionado').innerHTML = "Usted es un aficionado de tipo básico";
    } else if (year > 2 && year <= 5) {
        document.getElementById('tipoAficionado').innerHTML = "Usted es un aficionado de tipo Avanzado";
    } else if (year > 5) {
        document.getElementById('tipoAficionado').innerHTML = "Usted es un aficionado de tipo Premium";
    } else {
        document.getElementById('tipoAficionado').innerHTML = "Ha introducido unos digitos no validos.";
    }
}

function calcularAños(fechaIntroducida) { // nos calcula los años
    var FechaHoy = Date.now();
    const msAños = 31557600000; // milisegundos que tiene un año
    var calculo = FechaHoy - fechaIntroducida; // nos calcula los milisegundos entre la fecha indtroducida y hoy
    calculo = calculo / msAños;
    var calculoTrunc = Math.trunc(calculo); // nos calcula los años y nos trunca al valor entero para abajo
    return calculoTrunc;
}

// formulario comprar
function entradasDisponibles() { // añadir entradas al select de aficionado
    pintarEntradas();
    obtenerEntrada();
    //llamo al elemento select
    var nuevaEntrada = document.getElementById("listaEntradas");

    // recorremos el array para coger las keys
    for (i = 0; i <= listaEntradas.length - 1; i++) {
        //le doy una nueva opcion
        var optionSelect = document.createElement("option");
        //añadimos la entrada con el id y el titulo al option
        optionSelect.innerHTML = "ID: " + listaEntradas.indexOf(listaEntradas[i]) + " Partido: " + listaEntradas[i].titulo;
        //añado la opcion al select
        nuevaEntrada.appendChild(optionSelect);
    }

    //SOLO MUESTRA EL ULTIMO ELEMENTO DEL ARRAY, RECORDATORIO   
}


//Guarda la cantidad de entradas que quieren comprar
function cantidadEntradas() {
    //Obtenemos las entradas disponibles
    obtenerEntrada();
    //Guardamos el valor que recogemos por el id del input
    var cantidad = document.getElementById("numeroEntradas").value;
    //Nos aseguramos que la cantidad de entrada que van a compar es menor que las disponibles 
    if (cantidad > listaEntradas.length) {
        alert("La cantidad debe de ser menor que el numero de entradas disponibles");
    } else {
        var entradaAñadida = document.getElementById("numeroEntradas").value;

        var exito = document.getElementById("exito");
        exito.innerHTML = cantidad + " Entradas añadidas con exito ";
        exito.appendChild(exito);
    }
    return entradaAñadida;
    // HACER QUE RECONOZCA QUE LA CANTIDAD ES MAYOR QUE 0
}


//Comprobar  entradas
function comprobarForm() {

}

//crear carrito si el form es correcto debe almacenar el id, titulo, precio y la cantidad
function crearCarrito() {
    var carrito = [];
}

//Debe mostrarse cada vez que compramos una entrada y se debe almacenar en el array carrito el id, titulo, precio y la cantidad
function mostrarCarrito() {

}

//Suma el precio de todas las entradas, debere recorrer el carrito sumando los precios
//Cada vez que se sume un elemento debe de mostrar el nuevo total
function calculoTotal() {

}

/*COMPRAR*/

function comprar() {

}

function actualizarEntradas(entradas) {

}

function mostrarCarrito() {

}

