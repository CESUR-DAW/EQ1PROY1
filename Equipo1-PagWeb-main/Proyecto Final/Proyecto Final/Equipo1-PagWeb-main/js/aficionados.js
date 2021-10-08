function bienvenidoAficionado() {
    var nombre = document.getElementById('nombre').value;
    var year = document.getElementById('year').value;
    var fechaIntroducida = new Date(year); // La fecha pasada por date la desglosa

    var calculoAños = calcularAños(fechaIntroducida);
    console.log(calcularAños);

    mostrarMensaje(nombre, calculoAños);
    mostrarTipoAficionado(calculoAños);

}
function mostrarMensaje(nombre, calculoAños) {
    document.getElementById('mensajeBienvenida').innerHTML = "Bienvenid@ a la pagina Aficionados Usuario: " + nombre + " usted lleva en el club: " + calculoAños + " años";
}

function mostrarTipoAficionado(year) {
    if (year > 0 && year <= 2) {
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
    nuevaFecha = fechaIntroducida; 
    calculo = hoy - nuevaFecha; // nos calcula los milisegundos entre la fecha indtroducida y hoy
    calculo = Math.trunc(calculo / 31557600000); // nos calcula los años y nos trunca al valor entero
    return calculo;
}

