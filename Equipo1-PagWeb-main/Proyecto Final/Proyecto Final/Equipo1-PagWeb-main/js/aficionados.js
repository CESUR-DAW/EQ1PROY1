function bienvenidoAficionado() {
    var nombre = document.getElementById('nombre').value; //Recoge en la variable "nombre", los datos introducidos por el usuario en el campo "nombre" del formulario.
    var year = document.getElementById('year').value; //Recoge en la variable "year", los datos introducidos por el usuario en el campo "Fecha de inscripcion" del formulario.
    var fechaIntroducida = new Date(year); // La fecha pasada por date la desglosa
    var calculoAños = calcularAños(fechaIntroducida);
    mostrarMensaje(nombre, calculoAños);
    mostrarTipoAficionado(calculoAños);

}
function mostrarMensaje(nombre, calculoAños) {
    if (calculoAños >= 0) {
        document.getElementById('mensajeBienvenida').innerHTML = "Bienvenid@ a la pagina Aficionados Usuario: " + nombre + " usted lleva en el club: " + calculoAños + " años";
    }else{
        document.getElementById('mensajeBienvenida').innerHTML = "La fecha introducida no es valida";
    }
}

function mostrarTipoAficionado(year) {
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

