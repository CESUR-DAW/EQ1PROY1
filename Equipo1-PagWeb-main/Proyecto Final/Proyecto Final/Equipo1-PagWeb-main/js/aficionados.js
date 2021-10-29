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
    var nuevaEntrada = document.getElementById("cartelera");

    // recorremos el array para coger las keys
    for (i = 0; i <= listaEntradas.length - 1; i++) {
        //le doy una nueva opcion
        var optionSelect = document.createElement("option");
        optionSelect.setAttribute("value", listaEntradas.indexOf(listaEntradas[i]));
        //añadimos la entrada con el id y el titulo al option
        optionSelect.innerHTML = "ID: " + listaEntradas.indexOf(listaEntradas[i]) + " Partido: " + listaEntradas[i].titulo;
        //añado la opcion al select
        nuevaEntrada.appendChild(optionSelect);
    }


}




//Debe mostrarse cada vez que compramos una entrada y se debe almacenar en el array carrito el id, titulo, precio y la cantidad
function mostrarCarrito() {
    comprobarForm();
    añadirCarrito();
}

//Comprobar  entradas
function comprobarForm() {
    // recogemos el numero de las entrads del partido
    var cantidad = parseInt(document.getElementById("numeroEntradas").value);
    var entradaId = document.getElementById("cartelera").value;
    var entradasDisponibles = listaEntradas[entradaId].numEntradas;
    //comprobamos que todo este correcto
 
    if (cantidad <= entradasDisponibles  && !isNaN(cantidad) && cantidad.length != 0 ) {
        var exito = document.getElementById("exito");
        alert("Exito");
        exito.innerHTML = cantidad + " Entradas añadidas con exito ";
        //devolvemos la cantidad de entradas         
    } else {
        alert("FRACASO");
    }
}



function obtener() {



}



//crear carrito si el form es correcto debe almacenar el id, titulo, precio y la cantidad
function añadirCarrito() {
    var carrito = [];
    comprobarForm();
    carrito.push(comprobarForm());

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