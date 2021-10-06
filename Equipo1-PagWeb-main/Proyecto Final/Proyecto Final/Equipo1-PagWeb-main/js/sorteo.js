
function sorteo() {
    var numero = document.getElementById("sorteo-input").value ;
    var premio = Math.floor(Math.random() * 10)+1; //número premiado
    
    var ganador=false;
        
    if(numero == premio) { 
        ganador=true;
    }
    mostrarMensajeSorteo(ganador);
}

    
    function mostrarMensajeSorteo(ganador){
        if (ganador){
            document.getElementById("texto-resultado").innerText = "Enhorabuena";
            
        }
        else{
            document.getElementById("texto-resultado").innerText = "Lo siento";
        }
    }
    
