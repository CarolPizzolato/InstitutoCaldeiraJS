let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
let ListaSorteados  = [];
let numLimite = 10;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brasilian Portuguese Female', {rate:1.2});
}


//ajuda o novo jogo a não ter que ficar escrevendo tudo
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparcampo();
    }
}
    // vamos colocar um limpar tela para cada erro ja limpar o campo

function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

// provavelmente vou ter que fazer o botão novo jogo
function gerarNumeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let tamanho = ListaSorteados.length;

    if (tamanho == numLimite) {
        ListaSorteados = [];
    }

    if (ListaSorteados.includes(numEscolhido)){
        
        return gerarNumeroAleatorio();
    } 
    else { 
        ListaSorteados.push(numEscolhido);
        return numEscolhido;}
}

function reiniciarJogo() {
    document.getElementById('reiniciar').setAttribute('disabled', true)
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
}

//vamos criar uma lista que impede repetição de valores do jogo
















