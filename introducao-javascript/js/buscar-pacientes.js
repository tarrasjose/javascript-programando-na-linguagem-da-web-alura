var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");

    if(xhr.status == 200) {
      erroAjax.classList.add("invisivel");

      var resposta = xhr.responseText;

      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      })
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }
  })
  xhr.send();
})


/*
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando pacientes...")

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  
  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");

    //status que é aquele código que é o 200, 404, 503, se for 200 significa que foi tudo bem.
    if(xhr.status == 200) {
      erroAjax.classList.add("invisivel")
      var resposta = xhr.responseText;

      var pacientes = JSON.parse(resposta);

      //Como busca um por vez, temos que usar o forEach para buscar cada um.

      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }
    
  })

  xhr.send();
  //Este que é o que envia a requisição

})

//Essa tecnica é ajax, fazer uma requisições assíncronas em javascript

*/