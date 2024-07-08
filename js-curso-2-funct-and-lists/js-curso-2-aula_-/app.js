
let titulo = document.querySelector('h1');

titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');

let maximo =  10;

paragrafo.innerHTML = `Escolha um número entre 1 e ${maximo}`;

let numeroSecreto = parseInt(Math.random()* maximo + 1);

function verificarChute(){
	console.log('chute verificado');
}

function reiniciar(){

}