//Pergunte ao usuário qual é o dia da semana. 
//Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
//Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt("Qual é o dia da semana?");

if(diaDaSemana == "Sábado"){
	alert("Bom fim de Semana!");
} else if(diaDaSemana == "Domingo"){
	alert("Bom fim de Semana!");
}else{
	alert("Boa Semana!")
}


//Verifique se um número digitado pelo usuário é positivo ou negativo. 
//Mostre um alerta informando.
let numero = prompt("Digite um número: ");
if (numero > 0){
	alert("O número é positivo.")
} else {
	alert("O número é negativo.")
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, 
//mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontos = 94;

if(pontos >= 100){
	alert("Parabéns, você venceu!");
}else {
	alert("Tente novamente para ganhar.")
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string 
//para incluir o valor do saldo.
let saldo = 300;
alert(`Seu saldo é R$ ${saldo}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas 
//usando esse nome.

let nome = prompt ("Digite seu nome: ");

alert ("Bem vindo" + nome);