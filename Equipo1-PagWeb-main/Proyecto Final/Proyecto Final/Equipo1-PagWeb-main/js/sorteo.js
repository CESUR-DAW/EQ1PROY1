
function sorteo() {
    var numero = document.getElementById("sorteo-input").value ;
    var premio = Math.floor(Math.random() * 10)+1; //número premiado
    
    var ganador=true;
    
    
        
    
    if(numero == premio) {
        ganador=true;
       
    }else{
        ganador=false;
        
    }
    function mostrarMensajeSorteo(ganador){
        if (ganador=true){
            document.getElementById("texto-resultado").innerHTML = "Enhorabuena";
            
        }
        else{
            document.getElementById("texto-resultado").innerHTML = "Lo siento"
        }
    }
    
    }