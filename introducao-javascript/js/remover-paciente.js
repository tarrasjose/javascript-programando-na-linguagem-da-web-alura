var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500)
})

/*
var pacientes = document.querySelectorAll(".paciente");


var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){

  //target tradução = alvo, quem foi o alvo do clique, ex: td nome, td, peso.
  //parentNode pegamos o pai do que foi clicado
  //target = método que retorna o elemento que foi clicado
  //parentNode = define que a ação a ser realizada será ao pai do target

  event.target.parentNode.classList.add("fadeOut"); //.fadeOut Efeito ante de excluir

  //setTimeout é uma função de tempo, que fala para o javascript, segura este tanto de tempo antes de executar o próximo passo.
  setTimeout(function(){
    if(event.target.tagName == 'TD') {
      event.target.parentNode.remove();
    } 
  },500);
  //1 segundo é 1000 milissegundos, 0,5 segundo é 500 milissegundo

  //var alvoEvento = event.target;
  //var paiDoAlvo = alvoEvento.parentNode;
  //paiDoAlvo.remove();
  
  //event.target.parentNode.remove(); Ou fazer tudo na mesma linha;
})
*/

  /*
  primeiro exemplo usado, mas não funciona com os adicionados do formulario

  //"dblclick" é o nome do evento que escuta duplo click
  pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
      console.log("Fui clicado com duplo  click");
      this.remove(); //this este, o this está sempre atrelado ao dono do evento e o remove exclui a tr.
    })
  }) //Só que este usado tem um problema, os pacientes que foram adicionados na página depois, não estão no addEventListener e não serão excluídos.
  */