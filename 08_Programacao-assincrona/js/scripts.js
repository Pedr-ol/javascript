// // 1- setTimeout
// console.log("Ainda não executou");

// setTimeout(function () {
//   console.log("Requisição assincrona");
// }, 2000); // em melisegundos, 2000 melisegundos = 2s.

// console.log("Ainda não executou 2");

// // 2- setInterval
// console.log("Ainda não começou");

// // setInterval(function () {
// //   console.log("Intervalo assíncrono");
// // }, 3000);

// console.log("Ainda não começou");

// // 3- promise
// const promessa = Promise.resolve(5 + 5);

// console.log("Algum código");

// promessa
//   .then((value) => {
//     console.log(`A soma é ${value}`);
//     return value;
//   })
//   .then((value) => value - 1)
//   .then((value) => console.log(`Agora é ${value}`));

// console.log("Outro código");

// // 4- tratamento de promise
// Promise.resolve(4 / "qwer")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Valores inváidos");
//     }
//   })
//   .catch((error) => console.log(`Um erro ocorreu: ${error}`));

// // 5- rejeitando promises
// function checkNumber(n) {
//   return new Promise((resolve, reject) => {
//     if (n > 10) {
//       resolve(`O número ${n} é maior que 10`);
//     } else {
//       reject(new Error(`O número ${n} é muito baixo`));
//     }
//   });
// }

// const a = checkNumber(32);
// const b = checkNumber(2);
// console.log(a, b);

// a.then((v) => console.log(`O resultado é ${v}`)).catch((error) =>
//   console.log(`Um erro ocorreu: ${error}`),
// );

// b.then((v) => console.log(`O resultado é ${v}`)).catch((error) =>
//   console.log(`Um erro ocorreu: ${error}`),
// );

// 6- resolvendo promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 2000);
});

const p2 = Promise.resolve(10 + 23);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("Erro");
  }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7- async functions
async function somaComDelay(a, b) {
  return a + b;
}
somarComDelay(2, 4).tehn((value) => {
  console.log(`O valor da soma é: ${value}`);
});

// 8- await
function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a promise");
    }, 2000);
  });
}
async function chamadaAsync() {
  console.log("Chamando a promise, e esperando o resultado...");
  const result = await resolveComDelay();
  console.log(`O resultado chegou: ${result}`);
}
chamadaAsync();

// 9- generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
