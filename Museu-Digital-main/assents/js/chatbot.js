const perguntasMenu = {
  1: "Pergunta 1?",
  2: "Pergunta 2?",
  3: "Pergunta 3?",
};

const respostasBot = {
  1: "Pergunta 1 de fato",
  2: "Pergunta 2 de fato",
  3: "Pergunta 3 de fato",
};

function carregarMenu() {
  const lista = document.getElementById("perguntas-lista");
  const log = document.getElementById("chat-log");

  if (!lista || !log) return;

  lista.innerHTML = "";

  for (let id in perguntasMenu) {
    const li = document.createElement("li");
    li.innerText = `${id}. ${perguntasMenu[id]}`;
    lista.appendChild(li);
  }

  log.appendChild(lista);
}

// inicializacao
window.onload = function () {
  carregarMenu();

  // suporte a tecla ENTER no campo de texto
  const inputField = document.getElementById("usuario-input");
  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // evita comportamento padrão do navegador
      mandarMsg();
    }
  });
};

function mostrarChat() {
  const chat = document.getElementById("chat-container");
  if (chat.style.display === "none" || chat.style.display === "") {
    chat.style.display = "flex";
  } else {
    chat.style.display = "none";
  }
}

function mandarMsg() {
  const input = document.getElementById("usuario-input");
  const log = document.getElementById("chat-log");
  const escolha = input.value.trim();

  if (respostasBot[escolha]) {
    // mensagem do Usuário
    const pUser = document.createElement("p");
    pUser.innerHTML = `<strong>Você:</strong> ${perguntasMenu[escolha]}`;
    log.appendChild(pUser);

    // limpa o menu de perguntas para o bot "pensar"
    document.getElementById("perguntas-lista").innerHTML = "";

    // resposta do Bot com delay (efeito fade)
    setTimeout(() => {
      const pBot = document.createElement("p");
      pBot.innerHTML = `<strong>Chatbot:</strong> ${respostasBot[escolha]}`;
      log.appendChild(pBot);

      // reativa o menu após a resposta aparecer
      carregarMenu();
      log.scrollTop = log.scrollHeight;
    }, 300); // ajuste dos milisegundos de delay
  } else if (escolha !== "") {
    const erro = document.createElement("p");
    erro.style.color = "#ff4c4c";
    erro.innerText = `Opção ${escolha} inválida.`;
    log.appendChild(erro);
    carregarMenu();
  }

  log.scrollTop = log.scrollHeight;
  input.value = "";
}
