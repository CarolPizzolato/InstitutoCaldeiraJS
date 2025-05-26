
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio'

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'INFERNO FUNCIONA CARALHO'


function botaoClicado() {
    alert('Botão foi clicado');
}

function mostrarAlerta() {
    alert("Botão foi clicado");
}

function botaoprompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function botaosoma(){
    let a = parseInt(prompt("Digite o valor de A"));
    let b = parseInt(prompt("Digite o valor de B"));
    let c = a + b;
    alert(`${a} + ${b} = ${c}`);
}
