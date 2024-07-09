let listaDeNumerosSorteados = [];
let maximo = 10;
let tentativa = 1;
let numeroSecreto = gerarNumeroAleatorio();

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do Número Secreto');
  exibirTextoNaTela('p', `Escolha um número entre 1 e ${maximo}`);
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * maximo + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == maximo) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela('p', 'O Número Secreto é Menor.');
  } else {
    exibirTextoNaTela('p', 'O Número Secreto é Maior.');
  }
  tentativa++;
  limparCampo();
}

function reiniciarJogo() {
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
  numeroSecreto = gerarNumeroAleatorio();
  tentativa = 1;
}

exibirMensagemInicial();
