
var alunos = [];

$(document).ready(function () {
  $("#btnCadastrar").click(function () {
    cadastrar();
    listar();
  });
});

function cadastrar() {
  var nome = $("#campoNome").val();
  var nota1 = $("#campoNota1").val();
  var nota2 = $("#campoNota2").val();
  var nota3 = $("#campoNota3").val();

  var media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

  var situacao;
  if (media >= 7) {
    situacao = "Aprovado";
  } else {
    situacao = "Reprovado";
  }

  if (nota1 <= 10 && nota2 <= 10 && nota3 <= 10) {
    if (nome != "") {
      alunos.push({
        nome: nome,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        media: media,
        situacao: situacao,
      });
    }
  }
}
function listar() {
  $("thead")[0].innerHTML = `
      <tr>
        <td>Nome</td>  
        <td>Nota 1</td>  
        <td>Nota 2</td>  
        <td>Nota 3</td>  
        <td>Media</td>  
        <td>Situacao</td>  
      </tr>
  `;
  var tabela = $("tbody");
  tabela[0].innerHTML = "";
  // Passar por todos os alunos e adicionar os valores na tabela
  for (let index = 0; index < alunos.length; index++) {
    // // Criar linha para adicionar na tabela
    // // Criar as colunas para inserir os dados dos alunos
      tabela.append(`
        <tr>
          <td>${alunos[index].nome}</td>
          <td>${alunos[index].nota1}</td>
          <td>${alunos[index].nota2}</td>
          <td>${alunos[index].nota3}</td>
          <td>${alunos[index].media}</td>
          <td>${alunos[index].situacao}</td>
        </tr>
    `)

    // var linha = tabela.insertRow(-1);
    // var coluna1 = linha.insertCell(0);
    // var coluna2 = linha.insertCell(1);
    // var coluna3 = linha.insertCell(2);
    // var coluna4 = linha.insertCell(3);
    // var coluna5 = linha.insertCell(4);
    // var coluna6 = linha.insertCell(5);
    // // Inserir os dados nas colunas
    // coluna1.innerText = alunos[index].nome;
    // coluna2.innerText = alunos[index].nota1;
    // coluna3.innerText = alunos[index].nota2;
    // coluna4.innerText = alunos[index].nota3;
    // coluna5.innerText = alunos[index].media;
    // coluna6.innerText = alunos[index].situacao;
  }
}