// 1- Number
console.log(typeof 10);
console.log(typeof 12.5);
console.log(typeof -83);

// 2- Operações aritmeticas
console.log(12 + 32);
console.log(20 / 2);
console.log(13 * 3);
console.log(21 + 21 * 3);

// 3- Special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof 12 * "asd");
console.log(typeof NaN);

// 4- Strings
console.log(typeof "Um texto");
console.log(typeof `Mais um texto`);

// 5- Simbolos em strings
console.log("Testando o \n quebra de linha");
console.log("Espaçamento \t de tab");

// 6- Concatenação
console.log("Meu " + "texto " + `concatenado`);

// 7- Interpolação
console.log(`A soma de 6 + 6 é: ${6 + 6}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8- Boolean
console.log(true);
console.log(4 > 50);
console.log(5 < 1);

// 9- Comparaçoes
console.log(6 <= 6);
console.log(2 > 2);
console.log(10 == 10);

// 10- Comparação de identico
console.log(9 + "9");
console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

// 11- Operadores logicos (And: &&), (Or: ||) e (Not: !)
console.log(true && true);
console.log(true && false);
console.log(5 < 2 && 5 > 9);
console.log(7 > 3 || "Pedro" === 3);
console.log(2 > 20 || true);
console.log(!false);
console.log(!2 < 20);

// 12- empty values
console.log(typeof null, typeof undefined);
console.log(null == undefined);
console.log(null === undefined);

// 13- Mudanças de tipos
console.log(23 * null);
console.log("teste" * "teste");
console.log("10" + 1);
console.log("10" - 1);
