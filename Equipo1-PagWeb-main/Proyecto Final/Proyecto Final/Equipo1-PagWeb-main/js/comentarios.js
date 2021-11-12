function tabla() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {
            let usuario = `<tr><th>Name</th><th>Email</th></tr>`;
            json.forEach(user => {
                usuario += `<tr><td>${user.name} </td><td>${user.email}</td></tr>`;
            });
            document.getElementById("users").innerHTML = usuario;
        });
}

function select() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => crearFormulario(json))

    function crearFormulario(response) {
        var elArray = response;
        var elSelect = "<select id='idusu'>";
        for (var i = 0; i < elArray.length; i++) {
            elSelect += "<option value='" + elArray[i].id + "'>" + elArray[i].username + "</option>";
        }
        elSelect += "</select>";
        document.getElementById("prueba").innerHTML = elSelect;
    }
}

function exportadatos() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: document.getElementById("titulo").value,
                body: document.getElementById("comentario").value,
                /*userId: document.getElementById("idusu").value,*/
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}