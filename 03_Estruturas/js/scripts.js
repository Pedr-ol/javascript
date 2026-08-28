// 1- Variáveis
let nome = "Pedro";
console.log(nome);

nome = "Pedro Oliveira";
console.log(nome);

const idade = 20; //Uma constante não pode ser alterada
console.log(idade);

let a = 12,
  b = 21,
  c = 32;
console.log(a, b, c);

// 3- Prompt
// const age = prompt("Digite sua idade:");
// console.log(`Sua idade é de ${age}.`);

// 4- Alert
//alert("Testando");

// 5- Math(objeto)
console.log(Math.max(3, 5, 7, 23, 576));

console.log(Math.floor(5.23)); //arrendonda para baixo
console.log(Math.ceil(5.23)); //arrendonda para cima

// 6- Console(objeto)
console.log("teste!");

console.error("erro!");

console.warn("aviso");

// 7- If
const m = 10;
if (m > 5) {
  console.log("Sim, m é maior que 5");
}

const user = "João";
if (user === "João") {
  console.log("Olá João!");
}

// 8- Else
const loggedIn = false;
if (loggedIn) {
  console.log("Está autenticado");
} else {
  console.log("Não esta autenticado");
}

// 9- Else if
if (1 > 2) {
  console.log("TESTE");
} else if (3 > 4) {
  console.log("TESTE 2");
} else if (4 > 1) {
  console.log("Agora sim");
}

const userName = "Pedro";
const userAge = 20;
if (userName === "Jose") {
  console.log("Bem vindo Jose!");
} else if (userName === "Pedro" && userAge === 20) {
  console.log("Olá Pedro, você tem 20 anos!");
} else {
  console.log("Nenhuma condição aceita!");
}

// 10- While
let p = 0;
while (p < 5) {
  console.log(`Repetindo ${p}`);
  p = p + 1;
}

// 11- Do while
let o = 10;
do {
  console.log(`Valor de o: ${o}`);
  o--;
} while (o > 1);

// 12- For
for (let t = 0; t < 10; t++) {
  console.log(`Repetindo algo ${t}`);
}

// 13- Break
for (let g = 20; g > 10; g--) {
  console.log(`O valor de g é: ${g}`);

  if (g === 14) {
    console.log(`O g é 14!`);
    break;
  }
}

// 14- Continue
for (let s = 1; s < 10; s = s + 1) {
  if (s % 2 === 0) {
    console.log(`Número par`);
    continue;
  }

  console.log(s);
}

// 15- Switch
const job = "Médico";

switch (job) {
  case "Programador":
    console.log("Você é um programador");
    break;
  case "Médico":
    console.log("Você é um Médico");
    break;
  default:
    console.log("Profissão não encontrada");
}
