
function bienvenidoAficionado() {
    var nombre = document.getElementById('nombre').value;
    var year = document.getElementById('year').value;
    mostrarMensaje(nombre,year);
    mostrarTipoAficionado(year);
    
}
function mostrarMensaje(nombre, year) {
    document.getElementById('mensajeBienvenida').innerHTML="Bienvenid@ a la pagina Aficionados Usuario: "+nombre+" usted lleva en el club: "+year+" años";
}

function mostrarTipoAficionado(year) {
    if (year > 0 && year <= 2) {
        document.getElementById('tipoAficionado').innerHTML="Usted es un aficionado de tipo básico";
    }else if (year > 2 && year <= 5) {
        document.getElementById('tipoAficionado').innerHTML="USted es un aficionado de tipo Avanzado" ;
    }else if( year > 5){
        document.getElementById('tipoAficionado').innerHTML="Usted es un aficionado de tipo Premium"; 
    }else{
        document.getElementById('tipoAficionado').innerHTML="Ha introducido unos digitos no validos." ;
    }
}




