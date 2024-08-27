function showData(data) {
  let encrypted = data;
  let elemento = document.getElementById('encrypted');
  elemento.innerHTML =
    `<div class="content-decrypt-new">
    <span class="text-decrypt">${encrypted}</span>` +
    `<button class="btn-decrypt" id="btn-copy" onclick="copy()">
        Copiar
      </button></div>`;
}

function encrypt() {
  let textToEncrypt = document.querySelector('textarea').value;
  let encrypt;

  encrypt = textToEncrypt.replaceAll('a', 'ai');
  encrypt = encrypt.replaceAll('e', 'enter');
  encrypt = encrypt.replaceAll('i', 'imes');
  encrypt = encrypt.replaceAll('o', 'ober');
  encrypt = encrypt.replaceAll('u', 'ufat');

  showData(encrypt);
}

function decrypt() {
  let textToDecrypt = document.querySelector('textarea').value;
  let decrypt;

  decrypt = textToDecrypt.replaceAll('ufat', 'u');
  decrypt = decrypt.replaceAll('ober', 'o');
  decrypt = decrypt.replaceAll('imes', 'i');
  decrypt = decrypt.replaceAll('enter', 'e');
  decrypt = decrypt.replaceAll('ai', 'a');

  showData(decrypt);
}

function copy() {
  console.log('Copiar texto');
}
