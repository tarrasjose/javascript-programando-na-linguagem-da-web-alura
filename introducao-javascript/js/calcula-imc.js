var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Ferreira Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	
	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if(!pesoEhValido) {
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido")
		pesoEhValido = false;
	}

	if(!alturaEhValida) {
		tdImc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
		alturaEhValida = false;
	}

	if(pesoEhValido && alturaEhValida) {
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
	

}

function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}

function validaPeso(peso) {
	if(peso >= 0 && peso <= 500) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if(altura >= 0 && altura <= 3.00) {
		return true;
	} else {
		return false;
	}
}









/*
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Ferreira Nutricionista"; //Alterando o texto no HTML.




var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
	//console.log(pacientes)
	
	var paciente = pacientes[i]


	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if (!pesoEhValido) {
		//console.log("Peso inválido!");
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido"); //Criação de class no javascript
	}

	if (!alturaEhValida) {
		//console.log("Altura inválida");
		alturaEhValida = false;
		tdImc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido"); //criação de class no javascript
	}
	
	if (alturaEhValida && pesoEhValido) {
		var imc = calculaImc(peso, altura)
		tdImc.textContent = imc;
	}
}

function validaPeso(peso) {
	if(peso >= 0 && peso < 1000) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if(altura >= 0 && altura <= 3.00) {
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso, altura) {
		var imc = 0;
		imc = peso / (altura * altura);
		return imc.toFixed(2); //Limitando casas decimais com o toFixed
	}

*/

	
/*
ANOTAÇÃO

EVENT LISTENER

titulo.addEventListener("click", mostraMensagem )

function mostraMensagem () {
	console.log("Fui clicado!")
}
OU
titulo.addEventListener("click", function () {
	console.log("Também funciona assim")
} )
*/

/*console.log(titulo)
console.log(titulo.textContent)*/

