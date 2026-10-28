// === 1- tema claro/escuro ===

const botaoTema = document.getElementById("botao-tema");
const textoTema = document.getElementById("texto-tema");

botaoTema.addEventListener("click", function(){
    document.body.classList.toggle("escuro");

    if(document.body.classList.contains("escuro")){
        textoTema.textContent = "Tema claro";
    }else{
        textoTema.textContent = "Tema escuro";
    }
});

const carrossel = document.getElementById("carrossel");
const botaoVoltar = document.getElementById("voltar");
const botaoAvancar = document.getElementById("avancar");

const fimDoCarrossel = function(){
    return carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 1;
};

botaoAvancar.addEventListener("click", function(){
    if(fimDoCarrossel()){
        carrossel.scrollTo(0,0);
    } else {
        carrossel.scrollBy(340,0);
    }
});

botaoVoltar.addEventListener("click", function(){
    if(carrossel.scrollLeft <= 0){
        carrossel.scrollTo(carrossel.scrollWidth,0);
    } else {
        carrossel.scrollBy(-340,0);
    }
});


