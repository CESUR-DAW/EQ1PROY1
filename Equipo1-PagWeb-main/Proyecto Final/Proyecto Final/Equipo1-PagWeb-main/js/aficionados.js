var nombre = prompt("Introduzca su nombre como aficionado: "); //pedimos el nombre del aficionado
var años = parseInt(prompt("Introduzca los años que lleva como aficionado: "));//años que lleva el aficionado

while(Number.isNaN(años) || años < 0){
   años = parseInt(prompt("Alerta! Solo valen numeros.Introduzca los años que lleva como aficionado: "));
}

var equipo= "Raspando Aprobados"; //Nombre del equipo
var dias = años*365;
document.write("Hola <b>"+nombre + "</b> bienvenido a la web del equipo <b>" + equipo +"</b>. Gracias por acompañarnos durante estos <b>"+años+"</b> años, que son "+dias+" dias.");//mensaje una vez introduzcas los datos


if (años >= 1 && años <= 2) {
    document.write("Usted es un aficionado de nivel <b> básico </b>.");
}else if (años > 2 && años < 6){
    document.write("Usted es un aficionado de nivel <b> Avanzado </b>.");
}else{
    document.write("Usted es un aficionado de nivel <b> Premium </b>.");
}






/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */


/*
$(document).ready(function() {

    var nombre = $("#name").val();
    var año = $("#year").val();

    $("#aceptar").click(function() {

        alert(nombre);

    });
    


});*/