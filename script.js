// ================================================ 
// script.js — Captura de dados do formulário 
// Projeto: AgroVenda Digital 
// Desenvolvedor(a): Alan Alves Lopes 
// ================================================ 
 
// PASSO 1: Selecione o botão pelo id definido no HTML 
const botaoCadastrar = document.getElementById("btn-cadastrar"); 
//                                           	^ preencha com o id correto 
 
// PASSO 2: Adicione o ouvinte de evento de clique 
// Quando o botão for clicado, a função "cadastrar" será chamada 
botaoCadastrar.addEventListener("click", cadastrar); 
//                           	^ qual evento detecta um clique? 
 
// PASSO 3: Defina a função que será executada 
function cadastrar() { 
    alert("Cadastro realizado com sucesso!")
}
 
  // PASSO 4: Capture o valor de cada campo pelo id 
  const nome  = document.getElementById("nome-completo").value; 
  const email = document.getElementById("e-mail").value; 
  const senha = document.getElementById("password").value; 
  //                                 	^ id do campo  	^ propriedade que retorna o valor digitado 
 
  // PASSO 5: Exiba os dados no console 
  console.log("=== Dados capturados ==="); 
  console.log("Nome:",nome-completo); 
  console.log("E-mail:", e-mail); 
  console.log("Senha:", password); 
 
  // PASSO 6 (DESAFIO): Valide se algum campo está vazio. 
  // Se estiver, exiba um alert pedindo para o usuário preencher. 
  // Dica: use um if e verifique se nome === "" ou email === "" ou senha === "" 
  function cadastrar() {
   
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    alert('Cadastro realizado com sucesso!');
    
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
}

 
  // TAREFA: escreva a validação aqui 
 
 
