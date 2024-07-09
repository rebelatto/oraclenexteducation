// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura);
  console.log(`Seu imc é: ${imc}`);
}

calculaIMC(122, 1.73);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calculaFatorial(numero) {
  let fatorial = 1;
  if (numero == 0 || numero == 1) {
    console.log(`O Fatorial de ${numero} é ${fatorial}.`);
  } else {
    let n = numero;
    let fatorial = numero;
    while (n > 1) {
      n -= 1;
      fatorial *= n;
    }
    console.log(`O Fatorial de ${numero} é ${fatorial}`);
  }
}
calculaFatorial(0);
calculaFatorial(1);
calculaFatorial(2);
calculaFatorial(3);
calculaFatorial(4);
calculaFatorial(5);
calculaFatorial(6);
calculaFatorial(7);
calculaFatorial(8);
calculaFatorial(9);
calculaFatorial(10);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(dolar) {
  let cotacao = 4.8;
  let reais = dolar * cotacao;
  return reais.toFixed(2);
}

let valorEmDolar = 150;
let valorEmReal = converterDolarParaReal(valorEmDolar);
console.log(`$${valorEmDolar} dólares equivalem a R$ ${valorEmReal}`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaEPerimetroRetangulo(altura, largura) {
  let area = altura * largura;
  let perimetro = (altura + largura) * 2;
  console.log(`A área é ${area} e o perimetro é ${perimetro}`);
}

areaEPerimetroRetangulo(3, 10);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaEPerimetroCirculo(r) {
  const pi = 3.14;
  let area = pi * (r * r);
  let perimetro = 2 * pi * r;
  console.log(`A área é ${area.toFixed(2)} metros quadrados`);
  console.log(`O perímetro é ${perimetro.toFixed(2)} metros`);
}

areaEPerimetroCirculo(5);
areaEPerimetroCirculo(12);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function imprimirTabuada(numero) {
  for (let i = 1; i < numero; i++) {
    let tabuada = numero * i;
    console.log(`${numero} X ${i} = ${tabuada}`);
  }
}

imprimirTabuada(10);
