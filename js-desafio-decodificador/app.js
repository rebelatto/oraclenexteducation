function encrypt() {
  let encrypted = document.querySelector('textarea').value;
  let elemento = document.getElementById('encrypted');
  elemento.innerHTML = encrypted;
  console.log(elemento);
  console.log(encrypted);
}

function decrypt() {
  console.log('Descriptografando texto');
}
