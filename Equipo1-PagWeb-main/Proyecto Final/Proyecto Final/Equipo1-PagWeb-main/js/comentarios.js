function usuarios() {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/users";


    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myFunction(xmlhttp.responseText);
            prueba(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();

    function myFunction(usuarios) {
        var arr = JSON.parse(usuarios);
        var out = "<p>";

        for (var i = 0; i < arr.length; i++) {
            out += "Usuario <b>" + arr[i].username + "</b> id: <b>" + arr[i].id + "</b> name: <b>" + arr[i].name + "</b><br><br> "; /* CAMBIAR*/
        }
        document.getElementById("username").innerHTML = out;
    }
}

function comentarios() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts"

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myFunction(xmlhttp.responseText);
            prueba(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();

    function myFunction(comentarios) {
        var arr = JSON.parse(comentarios);
        var out = "<p>";

        for (var i = 0; i < arr.length; i++) {
            /*out += "id" + arr[i].id;*/
        }
        document.getElementById("comentarios").innerHTML = out;
    }
}