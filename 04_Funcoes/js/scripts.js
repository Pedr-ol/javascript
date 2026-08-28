// 1- Criando uma função
function minhaFuncao() {
  console.log("Testando...");
}
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("Funcao em variável");
};
minhaFuncaoEmVariavel();

function funcaocomParamentro(txt) {
  console.log(`Imprimindo: ${txt}`);
}
funcaocomParamentro("Alguma coisa");
funcaocomParamentro("Outra coisa");

// 2- Return
const a = 11;
const b = 22;
const c = 33;
const d = 44;
function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);
console.log(resultado);
console.log(soma(c, d));

// 3- Escopo da funcao
let y = 10;
function testandoEscopo() {
  let y = 31;
  console.log(`Y dentro da função é: ${y}`);
}
testandoEscopo();

y = 23;
console.log(`Y fora da função é: ${y}`);

testandoEscopo();

// 4- Escopo aninhado
let m = 20;

function escopoAninhado() {
  let m = 30;

  if (true) {
    let m = 40;

    if (true) {
      let m = 50;
      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}

escopoAninhado();
console.log(m);

// 5- Arrow function
const testeArrow = () => {
  console.log("Esta é uma arrow function");
};
testeArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return;
  }
  console.log("Impar");
};
parOuImpar(4);
parOuImpar(6);
parOuImpar(21);
parOuImpar(55);

const raizQuadrada = (x) => {
  return x * x;
};
console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada2(5));
console.log(raizQuadrada2(32));

const helloWorld = () => console.log("Olá Mundo");
helloWorld();

// 6- Parametro opcional
const multiplication = function (m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};
console.log(multiplication(5));
console.log(multiplication(2, 4));

const gretting = (name) => {
  if (!name) {
    console.log("Olá");
    return;
  }
  console.log(`Olá ${name}`);
};
gretting();
gretting("Pedro");

// 7- Default
const customerGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}!`;
};
console.log(customerGreeting("Pedro"));
console.log(customerGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};
repeatText("Testando...");
repeatText("Agora repete 5 vezes", 5);

// 8- Closure
function someFunction() {
  let txt = "Alguma coisa";

  function display() {
    console.log(txt);
  }

  display();
}
someFunction();

const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);
console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c1(10));

// 9- Recursão
const untilTen = (n, m) => {
  if (n < 10) {
    console.log("A função parou de executar");
  } else {
    const x = n - m;
    console.log(x);

    untilTen(x, m);
  }
};
untilTen(120, 8);

function factorial(x) {

  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const num = 6;
const result = factorial(num);
console.log(`O fatorial do número ${num} é ${result}`);
