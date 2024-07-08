let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clickConsole(){
	console.log('O botão foi clicado');
}

function clickAlerta(){
	alert('Eu amo JS');
}

function clickPrompt(){
	let cidade = prompt('Digite o nome de uma cidade do Brasil: ');
	alert(`Estive em ${cidade} e lembrei de você.`)
}

function clickSoma(){
	let num1 = parseInt(prompt('Digite um numero Inteiro - N1: '));
	let num2 = parseInt(prompt('Digite um numero Inteiro - N2: '));
	let soma = num1 + num2;
	console.log(soma);
	alert(`A soma de ${num1} com ${num2} é: ${soma}`);
}