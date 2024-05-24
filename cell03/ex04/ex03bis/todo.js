// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    var tarefa = prompt("Digite a nova tarefa:");
    if (tarefa !== null && tarefa !== "") {
      var divTarefa = $("<div>").text(tarefa);
      divTarefa.on("click", function() {
        if (confirm("Tem certeza que deseja remover esta tarefa?")) {
          $(this).remove();
          salvarTarefas();
        }
      });
      $("#ft_list").prepend(divTarefa);
      salvarTarefas();
    }
  }
  
  // Função para salvar as tarefas no localStorage
  function salvarTarefas() {
    var tarefas = [];
    $("#ft_list > div").each(function() {
      tarefas.push($(this).text());
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }
  
  // Função para carregar as tarefas do localStorage
  function carregarTarefas() {
    var tarefas = localStorage.getItem("tarefas");
    if (tarefas !== null) {
      tarefas = JSON.parse(tarefas);
      $.each(tarefas, function(index, value) {
        var divTarefa = $("<div>").text(value);
        divTarefa.on("click", function() {
          if (confirm("Tem certeza que deseja remover esta tarefa?")) {
            $(this).remove();
            salvarTarefas();
          }
        });
        $("#ft_list").append(divTarefa);
      });
    }
  }
  
  // Carregar as tarefas ao carregar a página
  $(document).ready(function() {
    carregarTarefas();
  });
  