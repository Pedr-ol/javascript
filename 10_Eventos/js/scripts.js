// 1- adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Você clicou aqui");
});

// 2- removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimir() {
  console.log("Clique!");
}

secondBtn.addEventListener("click", imprimir);

const thirBtn = document.querySelector("#other-btn");
thirBtn.addEventListener("click", () => {
  console.log("Evento removido!");
  secondBtn.removeEventListener("click", imprimir);
});

// 3- argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4- propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", () => {
  e.stopPropagation(); //não executa o Evento 1, não se propaga
  console.log("Evento 2");
});

// 5- removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault(); //cancela o evento padrão
  console.log("Não teve a página trocada!");
});

// 6- eventos de teclado
// document.addEventListener("keyup", (e) => {
//   console.log(`Soltou a tecla ${e.key}`);
// });

// document.addEventListener("keydown", (e) => {
//   console.log(`Pressionou a tecla ${e.key}`);
// });

// // 7- eventos de mouse
// const mouseEvents = document.querySelector("#mouse");

// mouseEvents.addEventListener("mousedown", () => {
//   console.log("Pressionou o botão do mouse");
// });

// mouseEvents.addEventListener("mouseup", () => {
//   console.log("Soltou o botão do mouse");
// });

// mouseEvents.addEventListener("dblclick", () => {
//   console.log("Clique duplo com o botão do mouse");
// });

// // 8- evento de movimento no mouse
// document.addEventListener("mousemove", (e) => {
//   console.log(`No eixo x: ${e.x}`);
//   console.log(`No eixo y: ${e.y}`);
// });

// 9- eventos por scroll
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 400) {
    console.log("Passamos de 400px");
  }
});

// 10- eventos por foco
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("Entro no input!");
});

input.addEventListener("blur", (e) => {
  console.log("Saiu no input!");
});

// 11- evento por carregamento de página
window.addEventListener("load", () => {
  console.log("A página carregou!");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

// 12- debounce
const debounce = (func, delay) => {
  let timeout;

  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout); //limpa o timeout caso já esteja rodando.
    }
    timeout = setTimeout(() => {
      func.apply(arguments); // realiza a execução da função.
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(
    () => {
      console.log("Executando a cada 400m/s");
    },
    400, //aqui onde coloca o delay
  ),
);
