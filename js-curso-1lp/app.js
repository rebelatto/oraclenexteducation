alert('Boas vindas ao Jogo do Número Secreto!');

let final = 100
let numeroSecreto = (parseInt(Math.random()*final + 1));
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
	chute = prompt(`Escolha o numero de 1 a ${final}: `);

	if (chute == numeroSecreto){
	 	break;
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

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`);	

