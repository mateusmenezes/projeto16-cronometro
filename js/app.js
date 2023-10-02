let milissegundos = 0;
let auxiliar = 0;
let segundos = 0;
let tempo = document.querySelector(".time");
let cronometro = '';

document.querySelector(".button-start").addEventListener("click", () => {
    comecaCronometro();
});

document.querySelector(".button-stop").addEventListener("click", () => {
    paraCronometro();
});

document.querySelector(".button-reset").addEventListener("click", () => {
    paraCronometro();
    segundos = 0;
    milissegundos = 0;
    auxiliar = 0;
    tempo.textContent = "00:00";
});

//funcoes

function atualizaTempo(){
    milissegundos++;
    auxiliar++;
    segundos = Math.floor(auxiliar/ 100);
    // console.log(segundos)
    if(milissegundos == 100){
        milissegundos = 0;
    }
    if(milissegundos < 10){
        milissegundos = '0'+ milissegundos;
    }
    if(segundos < 10){
        segundos = '0'+ segundos;
    }

    tempo.textContent = segundos + ":" + milissegundos;
}

function comecaCronometro(){
    clearInterval(cronometro);
    cronometro = setInterval(atualizaTempo, 10);
}
function paraCronometro(){
    clearInterval(cronometro);
}

