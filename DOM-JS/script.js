// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const changePhrases = document.getElementById("btn-mudar-frases");
// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

changePhrases.addEventListener("click", function () {
    array_frases = ["mensagem1", "mensagem2", "mensagem3"];
    for (let index = 0; index < array_frases.length; index++) {
        let texto = "Eu alterei a frase " + index + " assinado: Marcos Renato";
        document.getElementById(array_frases[index]).innerText = texto;
    }
})