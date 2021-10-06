

function sorteo() {
    var numero = document.getElementById("sorteo-input").value ;
    var premio = Math.floor(Math.random() * 10)+1; //número premiado
    
    var ganador=true;
    
    
        
    
    if(numero == premio) {
        document.getElementById("texto-resultado").innerText =ganador=true;
        //document.getElementById("texto-resultado").innerText = ganador;
        //document.getElementById("texto-resultado").innerText = "Enhorabuena";
    }else{
        document.getElementById("texto-resultado").innerText =ganador=false
        //document.getElementById("texto-resultado").innerText = "Lo siento"
    }
    
    
    }