alert("Boas vindas ao Jogo do Número Secreto!");

let numeroSecreto = 8;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
	chute = prompt("Escolha o numero de 1 a 10: ");

	if (chute == numeroSecreto){
	 	alert(`Parabéns, você descobriu o número secreto ${numeroSecreto}! Tentativas usadas ${tentativas}`);	
	}else {
		if (chute > numeroSecreto) {
			alert(`O número secreto é menor que ${chute}.`);
		}
		if (chute < numeroSecreto) {
			alert(`O número secreto é maior que ${chute}.`);
		}
	}

	tentativas++;
}
