function selecionaComida(i){
    let elementos = document.querySelectorAll(".comida");
    let icon = document.querySelectorAll(".icon-comida");
    let x = Number(i);
    console.log(x);
    console.log(elementos);
    for(let j = 0; j < 3; j++){        
        elementos[j].classList.add("escondido");
        icon[j].classList.add("escondido");  
    }
    console.log(elementos);
    elementos[x].classList.toggle("escondido");
    icon[x].classList.toggle("escondido");
    console.log(elementos);
}