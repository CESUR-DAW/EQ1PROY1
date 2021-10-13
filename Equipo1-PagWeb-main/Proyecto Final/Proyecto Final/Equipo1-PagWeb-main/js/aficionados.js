function bienvenidoAficionado() {
    var nombre = document.getElementById('nombre').value; //Recoge en la variable "nombre", los datos introducidos por el usuario en el campo "nombre" del formulario.
    var year = document.getElementById('year').value; //Recoge en la variable "year", los datos introducidos por el usuario en el campo "Fecha de inscripcion" del formulario.
    var fechaIntroducida = new Date(year); // La fecha pasada por date la desglosa
    var calculoAños = calcularAños(fechaIntroducida);
    mostrarMensaje(nombre, calculoAños);
    mostrarTipoAficionado(calculoAños);

}

function mostrarMensaje(nombre, calculoAños) { // Mostramos el mensaje de bienvenida
    if (calculoAños >= 0 && nombre.length > 0) { // Descartamos fecha no valdad o un nombre vacio 
        if (window.navigator.language === 'es-ES') { // Comparamos el idioma del navegador de cada usario.
            document.getElementById('mensajeBienvenida').innerHTML = "Bienvenid@ a la pagina Aficionados Usuario: " + nombre + " usted lleva en el club: " + calculoAños + " años";
        } else if (window.navigator.language === 'fr') {
            document.getElementById('mensajeBienvenida').innerHTML = "Bienvenue sur la page Fans d'utilisateurs : " + nombre + " vous portez dans le club: " + calculoAños + " années";

        } else {
            document.getElementById('mensajeBienvenida').innerHTML = "Welcome to the page Fans User: " + nombre + " you've been in the club for: " + calculoAños + " years";

        }
    } else {
        document.getElementById('mensajeBienvenida').innerHTML = "Los datos introducidos no son correctos";
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
    const FechaHoy = Date.now();
    const hoy = new Date(FechaHoy);
    const msAños = 31557600000; // milisegundos que tiene un año
    nuevaFecha = fechaIntroducida;
    calculo = hoy - nuevaFecha; // nos calcula los milisegundos entre la fecha indtroducida y hoy
    calculo = Math.trunc(calculo / msAños); // nos calcula los años y nos trunca al valor entero
    return calculo;
}

