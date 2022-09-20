var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Ferreira Nutricionista";
/*console.log(titulo)
console.log(titulo.textContent)*/

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
	//console.log("Peso inválido!");
	pesoEhValido = false;
	tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
	//console.log("Altura inválida");
	alturaEhValida = false;
	tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido) {
	var imc = peso / (altura * altura);
	tdImc.textContent = imc;
}





console.log(paciente)
console.log(tdPeso)
console.log(peso)
console.log(altura)
