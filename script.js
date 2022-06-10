function selecionaComida(i){
    let elementos = document.querySelectorAll(".comida");
    let icon = document.querySelectorAll(".icon-comida");
    let x = Number(i);
    for(let j = 0; j < 3; j++){        
        elementos[j].classList.add("escondido");
        icon[j].classList.add("escondido");  
    }
    elementos[x].classList.remove("escondido");
    icon[x].classList.remove("escondido");
}