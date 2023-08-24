function alterarCor(alterarCor){
    var avaliacao = 0;

    // Numero 1
    if (alterarCor == 1) {
        document.getElementById("number1").style.background = 'hsl(25, 97%, 53%)';
        document.getElementById("number1").style.color = 'hsl(0, 0%, 100%)';
        avaliacao = 1;
    } else{
        document.getElementById("number1").style.background = 'hsl(213, 19%, 18%)';
        document.getElementById("number1").style.color = 'hsl(216, 12%, 54%)';
    }   
    
    // Numero 2
    if (alterarCor == 2) {
        document.getElementById("number2").style.background = 'hsl(25, 97%, 53%)';
        document.getElementById("number2").style.color = 'hsl(0, 0%, 100%)';
        avaliacao = 2;
    } else{ 
        document.getElementById("number2").style.background = 'hsl(213, 19%, 18%)';
        document.getElementById("number2").style.color = 'hsl(216, 12%, 54%)';
    }
    if (alterarCor == 3) {

    // Numero 3
        document.getElementById("number3").style.background = 'hsl(25, 97%, 53%)';
        document.getElementById("number3").style.color = 'hsl(0, 0%, 100%)';
        avaliacao = 3;
    } else{
        document.getElementById("number3").style.background = 'hsl(213, 19%, 18%)';
        document.getElementById("number3").style.color = 'hsl(216, 12%, 54%)';
    }

    // Numero 4
    if (alterarCor == 4) {
        document.getElementById("number4").style.background = 'hsl(25, 97%, 53%)';
        document.getElementById("number4").style.color = 'hsl(0, 0%, 100%)';
        avaliacao = 4;
    } else{
        document.getElementById("number4").style.background = 'hsl(213, 19%, 18%)';
        document.getElementById("number4").style.color = 'hsl(216, 12%, 54%)';
    }

    // Numero 5
    if (alterarCor == 5) {
        document.getElementById("number5").style.background = 'hsl(25, 97%, 53%)';
        document.getElementById("number5").style.color = 'hsl(0, 0%, 100%)';
        avaliacao =  5;
    } else{
        document.getElementById("number5").style.background = 'hsl(213, 19%, 18%)';
        document.getElementById("number5").style.color = 'hsl(216, 12%, 54%)';
    }

    // document.getElementById("rating").innerHTML = avaliacao;
    return avaliacao;

    
    
}

function avaliar( nota = alterarCor()) {

    
    document.getElementById("rating").textContent = nota;
}