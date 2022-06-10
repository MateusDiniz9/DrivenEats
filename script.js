let flag = 0;
let precos = [0,0,0]
let nomes = ["","",""]
let total = 0;

function selecionaComida(i, preco, item){
    let elementos = document.querySelectorAll(".comida");
    let icon = document.querySelectorAll(".icon-comida");
    let x = Number(i);
    for(let j = 0; j < 3; j++){        
        elementos[j].classList.add("escondido");
        icon[j].classList.add("escondido");  
    }
    elementos[x].classList.remove("escondido");
    icon[x].classList.remove("escondido");
    flag+= 1;
    precos[1] = Number(preco);
    nomes[1] = item;
    fecharPedido();
}

function selecionaBebida(i, preco, item){
    let elementos = document.querySelectorAll(".bebida");
    let icon = document.querySelectorAll(".icon-bebida");
    let x = Number(i);
    for(let j = 0; j < 3; j++){        
        elementos[j].classList.add("escondido");
        icon[j].classList.add("escondido");  
    }
    elementos[x].classList.remove("escondido");
    icon[x].classList.remove("escondido");
    flag+=1;
    precos[2] = Number(preco);
    nomes[2] = item;
    fecharPedido();
}

function selecionaSobremesa(i, preco, item){
    let elementos = document.querySelectorAll(".sobremesa");
    let icon = document.querySelectorAll(".icon-sobremesa");
    let x = Number(i);
    for(let j = 0; j < 3; j++){        
        elementos[j].classList.add("escondido");
        icon[j].classList.add("escondido");  
    }
    elementos[x].classList.remove("escondido");
    flag+=1;
    precos[3] = Number(preco);
    nomes[3] = item;
    fecharPedido();
}
function fecharPedido(){
    if(flag >= 3){
        document.querySelector(".bot button:nth-child(2)").classList.remove("escondido");
    }
    total = precos[1] + precos[2] + precos[3];
    console.log(total);
}
function fazerPedido(){
    /*let url =  encodeURIComponent("Olá, gostaria de fazer o pedido:- Prato: ${nomes[1]} - Bebida: ${nomes[2]}- Sobremesa: ${nomes[3]} Total: ${total}");
    window.open(url).focus();*/
}


