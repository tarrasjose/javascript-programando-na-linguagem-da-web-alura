// contador.js
/*
function atualizaCaracteres() {
  var postagem = document.querySelector("#corpo-postagem").value;
  var caracteres = postagem.length;

  var contador = document.querySelector("#numero-caracteres");
  contador.innerHTML = caracteres;
}
var campoPostagem = document.querySelector("#corpo-postagem");
campoPostagem.addEventListener("input", atualizaCaracteres);
*/

function atualizaCaracteres(){
  var texto = document.querySelector("#corpo-postagem").value;

  var caracteres = texto.length;

  var contador = document.querySelector("#numero-caracteres");

  contador.textContent = caracteres;
}

var campoTexto = document.querySelector("#corpo-postagem");

campoTexto.addEventListener("input", atualizaCaracteres)