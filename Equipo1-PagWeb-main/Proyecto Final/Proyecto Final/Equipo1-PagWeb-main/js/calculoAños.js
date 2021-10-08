var nombre = prompt("Introduzca su nombre como aficionado: "); //pedimos el nombre del aficionado
var año = parseInt(prompt("Introduzca el año que se afilio que lleva como aficionado: "));//año de afiliacion
var mes = parseInt(prompt("Introduzca el mes que se afilio que lleva como aficionado: "));//mes de afiliacion
var dia = parseInt(prompt("Introduzca el dia que se afilio que lleva como aficionado: "));//dia de afiliacion

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




