function acumulaBanner(banner){ 

    var banner = parseFloat(banner);

    var total = document.getElementById("total-vitrine").innerHTML;

    total = parseFloat(total)

    var soma = 0;

    var qtd = document.getElementById("qtdBanner").value;

    soma += parseFloat(banner * parseInt(qtd));

    total += soma

    document.getElementById("total-vitrine").innerHTML = total.toFixed(2);

    document.getElementById("card-01").style.display = "flex";

    document.getElementById("vlr-banner").innerHTML = soma;

}

function acumulaCartaz(cartaz){

    var cartaz = parseFloat(cartaz);

    var total = document.getElementById("total-vitrine").innerHTML;

    total = parseFloat(total)

    var soma = 0;

    var qtd = document.getElementById("qtdCartaz").value;

    soma += parseFloat(cartaz * parseInt(qtd));

    total += soma

    document.getElementById("total-vitrine").innerHTML = total.toFixed(2);

    document.getElementById("card-02").style.display = "flex";

    document.getElementById("vlr-cartaz").innerHTML = soma;
}

function acumulaFlyers(Flyers){ 

    var flyers = parseFloat(Flyers);

    var total = document.getElementById("total-vitrine").innerHTML;

    total = parseFloat(total)

    var soma = 0;

    var qtd = document.getElementById("qtdFlyers").value;

    soma += parseFloat(flyers * parseInt(qtd));

    total += soma

    document.getElementById("total-vitrine").innerHTML = total.toFixed(2);

    document.getElementById("card-03").style.display = "flex";
    
    document.getElementById("vlr-flyers").innerHTML = soma;

}
function acumulaFolders(Folders){

    var Folders = parseFloat(Folders);

    var total = document.getElementById("total-vitrine").innerHTML;

    total = parseFloat(total)

    var soma = 0;

    var qtd = document.getElementById("qtdFolders").value;

    soma += parseFloat(Folders * parseInt(qtd));

    total += soma

    document.getElementById("total-vitrine").innerHTML = total.toFixed(2);

    document.getElementById("card-04").style.display = "flex";

    document.getElementById("vlr-folders").innerHTML = soma;

}

function carrinho(){
    
    var total = document.getElementById("total-vitrine").innerHTML;


    if(parseFloat(total) > 0.00){
        document.getElementById("btn-carrinho").style.display = "block";
    }

    document.getElementById("modal").style.display = "block";

}

function fecharModal(){

    document.getElementById("modal").style.display = "none";

}

function excluir(exclui){

    var total = document.getElementById("total-vitrine").innerHTML;
    var qtd = document.getElementById("qtdBanner").value;
    var menos = qtd * 42.00;
    
    total -= menos;

    if(exclui == "card-01"){

        document.getElementById(exclui).style.display = "none";
        document.getElementById("total-vitrine").innerHTML = total;
        document.getElementById("qtdBanner").value = 0;

    }

    if(total == 0){
        document.getElementById("btn-carrinho").style.display = "none";
    }
}

function excluir_cartaz(exclui){

    var total = document.getElementById("total-vitrine").innerHTML;
    var qtd = document.getElementById("qtdCartaz").value;
    var menos = qtd * 1.50;

    total -= menos;

    if(exclui == "card-02"){

        document.getElementById(exclui).style.display = "none";
        document.getElementById("total-vitrine").innerHTML = total;
        document.getElementById("qtdCartaz").value = 0;

    }

    if(total == 0){
        document.getElementById("btn-carrinho").style.display = "none";
    }
}

function flyers_excluir(excluir){
    var total = document.getElementById("total-vitrine").innerHTML;
    var qtd = document.getElementById("qtdFlyers").value;
    var menos = qtd * 88.00;
    
    total -= menos;

    if(excluir == "card-03"){

        document.getElementById(excluir).style.display = "none";
        document.getElementById("total-vitrine").innerHTML = total;
        document.getElementById("qtdFlyers").value = 0;

    }

    if(total == 0){
        document.getElementById("btn-carrinho").style.display = "none";
    }
}


function folders_excluir(excluir){

    var total = document.getElementById("total-vitrine").innerHTML;
    var qtd = document.getElementById("qtdFolders").value;
    var menos = qtd * 18.00;
    
    total -= menos;

    if(excluir == "card-04"){

        document.getElementById(excluir).style.display = "none";
        document.getElementById("total-vitrine").innerHTML = total;
        document.getElementById("qtdFolders").value = 0;

    }
  
        
    if(total == 0){
        document.getElementById("btn-carrinho").style.display = "none";
    }
    
}

