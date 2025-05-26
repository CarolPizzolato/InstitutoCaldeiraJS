

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10'


function exibirH1(){
let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo do número secreto'
}

function exibirTextoTela(tag, texto){
let campo = document.querySelector(tag)
campo.innerHTML = texto
}
exibirTextoTela('h1', 'Escolha um numero entre 1 e 10');
exibirTextoTela('p','Escolha um numero entre 1 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto)
}

let numeroSecreto = numeroAleatorio();
function numeroAleatorio(){
    return parseInt (Math.random() * 10 + 1);
}