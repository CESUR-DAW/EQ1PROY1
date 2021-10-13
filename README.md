# EQ1PROY1
Proyecto 1 - Equipo 1 - Desarrollo Aplicaciones Web


SPRINT 2 - EVALUACIÓN

STORY 1: FORMULARIO Y FUNCIONES PÁGINA AFICIONADO - 5P/5P 
Formulario en html con botón enviar a función 1/1 
Función bienvenido aficionado 1.5/1.5 
Función Mensaje bienvenida aficionado 1/1 
Función tipo de aficionado 1/1 
Comentarios y claridad del código 0.5/0.5

STORY 2: IDIOMA PÁGINA AFICIONADOS. 2.7P 
Función mostrar mensaje 0.7/1
La función es correcta, la comprobación de que el año introducido es el correcto no se debe de hacer dentro de la función mostrar mensaje, sino ne la función bienvenidoaficionado, ya que si el número no es correcto no mostráis el mensaje, pero si estáis haciendo todo el cálculo anterior de los años cuando no tiene sentido si no es un número correcto. Como no se pide esta comprobación podéis elegir si quitarla por completo o ponerla fuera y os actualizo la nota.
Detector idioma 1/1
Idiomas español, francés e ingles 0.5/0.5
Comentarios y código 0.5/0.5

STORY 3: FORMULARIO EN SORTEO. 8P / 8P

Página HTML Con formulario, párrafo de mensaje Sorteo y botón llamar a función sorteo 1.5/1.5 
Función sorteo 2/2 
Función mostrarMensajeSorteo 1.5/1.5 
Comprobación valor introducido es un número 1/1 
Generar número aleatorio 1.5/1.5 
Comentarios y claridad del código 0.5/0.5

El código es muy claro, limpio y optimizado. Buen trabajo.


STORY 4: FORMULARIO LOGIN DE ÁREA PRIVADA 6P / 6P 
Página nueva html con formulario, botón con función y menú actualizado 1.5/1.5 
Función login: 1.5/1.5 
Redirección a área privada: 1/1 
Mensaje validación si es erróneo 1.5/1.5 
Comentarios y claridad del código 0.5/0.5

STORY 5: CÁLCULO DE AÑOS EN AFICIONADOS. /10P 
Formulario html con fecha 1/1
Guardar fecha actual en bienvenidoAficionado 1.5/1.5
Función calcularaños que recibe la fecha introducida por el usuario 1/1
Guardar fecha actual 0.5/1
No debéis usar una constante cuando el valor es cambiante, en este caso la fecha de hoy cambia cada día, una constante sería un valor fijo. Usa el valor de variable.
Para guardar la fecha actual con Date.now() es suficiente, ya tenéis ahí la fecha actual devuelta no tenéis que crear un new Date, es como crearla dos veces, podéis quitar esa línea.

Cálculo de años en función de la fecha 1.5/2
El cálculo es correcto, os falta declarar la variable como var calculo. No es necesario crear otra variable nuevaFecha, podéis usar la variable que recibe la función directamente, es decir usar fechaIntroducida.


Redondeo de años sin decimales 0.7/1
Es recomendable que uséis dos variables diferentes para el cálculo, una para calcular la diferencia en años y otra diferente para hacer el truncamiento, ya que puede ser lioso y difícil de mantener el código si usáis la misma variable para el cálculo de la diferencia en milisegundos y el mismo nombre de variable para el valor en años truncado, entiendo que deben ser dos cosas diferentes.
Devolver valor de años calculados en la función 1/1
Llamar a la función calculo de años desde bienvenido aficionado 1/1
Código limpio y comentarios 0.3/0.5
El código está correcto comentado, pero tenéis que pulir la parte que os he comentado de usar variables en vez de constantes cuando cambia el valor, o evitar usar el mismo nombre de variable. También si habéis actualizado el código para el cálculo de años, quitad las funciones y clases que no se usan, tenéis subido otro fichero javascript que entiendo que ya no usáis y se llama calculodeaños. Todo lo que no se use en el proyecto debe borrarse, si váis dejando código viejo o sin usar el código será cada vez menos mantenible y más propenso a errores.



STORY 6: MÁXIMO INTENTOS EN LOGIN ÁREA PRIVADA - 5P / 5P

Cálculo máximo de intentos: 2.5/2.5 Mensaje mostrar intentos que quedan 1/1 Redirección a página home si supera el máximo 1/1 Comentarios y claridad de código 0.5/0.5

STORY 7: LISTA DE JUGADORES EN ÁREA PRIVADA - 6.25P/8P 
HTML para añadir, borrar y mostrar jugadores 1/1

Crea una función añadirJugador, que añada a la lista de jugadores el nombre del jugador introducido en el input del formulario. 2/2
Interesante la funcionalidad añadida de limpiar el input.


Crea una función borrarJugador que elimine de la lista de jugadores el nombre del jugador introducido en el input del formulario. 1/2.5
No estáis eliminando el jugador del array, sino comprobando su posición y quitándolo del string lista, esto hará que si elimináis dos jugadores, el primer jugador que eliminásteis se vuelva a mostrar la segunda vez.


Crea una funcion mostrarListaJugadores que muestre en el párrafo lista de jugadores, la lista de jugadores creada. Llama a la función mostrarListaJugadores desde las funciones añadirJugador y borrarJugador para que la lista se actualice cada vez que alguien añade o elimina un jugador de la lista.  0/2
No habéis creado una nueva función para mostrar la lista de jugadores, sino que estáis repitiendo el código en la función añadir y borrar. Debéis separarlo una función para que quede el código más claro.

Comentarios y claridad del código 0.25/0.5
Habéis añadido comentarios, debéis crear un fichero javascript nuevo para las funciones añadir los jugadores, no debe ir en el mismo fichero que login ya que son funcionalidades independientes y separadas que van además en diferentes páginas.

