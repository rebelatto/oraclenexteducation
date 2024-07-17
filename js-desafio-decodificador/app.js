function showData() {
  let encrypted = document.querySelector('textarea').value;
  let elemento = document.getElementById('encrypted');
  elemento.innerHTML =
    `<div class="content-decrypt-new">
    <span class="text-decrypt">${encrypted}</span>` +
    `<button class="btn-decrypt" onclick="copy()">
        Copiar
      </button></div>`;
  console.log(elemento);
  console.log(encrypted);
}

function encrypt() {
  showData();
}

function decrypt() {
  console.log('Descriptografando texto');
}

function convertEspecialChar() {}
