let quantidadeMilhas = parseInt(prompt("Informe a quantidade de milhas do seu cartão: "));
let porcentagemDesconto = 0;


if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
	console.log(porcentagemDesconto);
} else {
	if(quantidadeMilhas > 5000){
		porcentagemDesconto = porcentagemDesconto + 10;
		console.log(porcentagemDesconto);
	}
}