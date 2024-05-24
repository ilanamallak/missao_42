// Função para adicionar uma nova tarefa
function adicionarTarefa() {
  var tarefa = prompt("Digite a nova tarefa:");
  if (tarefa !== null && tarefa !== "") {
      var divTarefa = document.createElement("div");
      divTarefa.textContent = tarefa;
      divTarefa.addEventListener("click", function() {
          if (confirm("Tem certeza que deseja remover esta tarefa?")) {
              this.remove();
              salvarTarefas();
          }
      });
      document.getElementById("ft_list").prepend(divTarefa);
      salvarTarefas();
  }
}

// Função para salvar as tarefas como cookie
function salvarTarefas() {
  var tarefas = [];
  var divTarefas = document.getElementById("ft_list").children;
  for (var i = 0; i < divTarefas.length; i++) {
      tarefas.push(divTarefas[i].textContent);
  }
  document.cookie = "tarefas=" + JSON.stringify(tarefas);
}


// Função para carregar as tarefas do localStorage
function carregarTarefas() {
    var tarefas = localStorage.getItem("tarefas");
    if (tarefas !== null) {
      tarefas = JSON.parse(tarefas);
      for (var j = 0; j < tarefas.length; j++) {
        var divTarefa = document.createElement("div");
        divTarefa.textContent = tarefas[j];
        divTarefa.addEventListener("click", function() {
          if (confirm("Tem certeza que deseja remover esta tarefa?")) {
            this.remove();
            salvarTarefas();
          }
        });
        document.getElementById("ft_list").appendChild(divTarefa);
      }
    }
  }
  
  // Função para salvar as tarefas no localStorage
  function salvarTarefas() {
    var divTarefas = document.getElementById("ft_list").children;
    var tarefas = [];
    for (var i = 0; i < divTarefas.length; i++) {
      tarefas.push(divTarefas[i].textContent);
    }
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }
  
  // Carregar as tarefas ao carregar a página
  carregarTarefas();