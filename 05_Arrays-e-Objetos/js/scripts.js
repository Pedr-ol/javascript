// 1- Arrays
const lista = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(lista);
console.log(typeof lista);

const itens = [10, "Pedro", 4.67, []];
console.log(itens);

const arr = ["a", "b", "c", "d", "e"];
console.log(arr[2]);
console.log(arr[23]);

// 2- Propriedades
const numbers = [4, 6, 8];
console.log(numbers.length); // quantidade de valores dentro do array.
console.log(numbers["length"]);

const myName = "Pedro";
console.log(myName.length);

// 3- Métodos
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "algum texto";
console.log(text.toUpperCase());
console.log(text.indexOf("e"));

// 4- Objetos
const person = {
  name: "Pedro",
  age: 20,
  job: "Programador",
};
console.log(person);
console.log(person.job);
console.log(person.name.length);

// 5- Criando e deletando propriedades
const car = {
  engine: 2.0,
  brand: "VW",
  model: "Tiguan",
  km: 22000,
};
console.log(car);

car.doors = 4;
console.log(car);

delete car.km;
console.log(car);

// 6- Mais de objetos
const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};
Object.assign(obj2, obj);
console.log(obj);
console.log(obj2);

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 7- Mutação
const a = {
  name: "Pedro",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;
console.log(b);

delete b.age;
console.log(a);

// 8- Loop em array
const users = ["Pedro", "Alice", "Larissa", "Gabriel", "Julia"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuário: ${users[i]}`);
}

// 9- push e pop
const array = ["a", "b", "c", "d"];
console.log(array);
array.push("e"); // adiciona o elemento no final do array
array.push("f"); // adiciona o elemento no final do array
console.log(array);

array.pop(); // remove o elemento que esta no final do array
console.log(array);

const itemRemovido = array.pop(); //mostra o elemento que foi removido
console.log(itemRemovido);
console.log(array);

array.push("z", "x", "y");
console.log(array);

// 10- shift e unshift
const letters = ["a", "b", "c", "d"];

const letter = letters.shift(); // remove o elemento no inicio do array
console.log(letter);
console.log(letters);

letters.unshift("j", "k", "l"); //adiciona no inicio do array.
console.log(letters);

// 11- indexOf e lastIndexOf
const myElements = ["pera", "uva", "melao", "caju", "uva"];
console.log(myElements.indexOf("melao")); //faz a busca pelo começo
console.log(myElements.indexOf("uva"));

console.log(myElements[1]);
console.log(myElements[myElements.indexOf("uva")]); //faz a busca pelo começo

console.log(myElements.lastIndexOf("uva")); //faz a busca pelo fim
console.log(myElements.lastIndexOf("caja"));

// 12- slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

const subArray4 = testeSlice.slice(3);
console.log(subArray4);

// 13- forEach
const nums = [1, 2, 4, 5, 7, 9];

nums.forEach((numero) => {
  console.log(`O numero é ${numero}`);
});

const post = [
  { title: "Primeiro post", category: "JavaScript" },
  { title: "Segundo post", category: "C++" },
  { title: "Terceiro post", category: "Python" },
];

post.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 14- includes
const brands = ["BMW", "VW", "FIAT"];

console.log(brands.includes("FIAT"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW");
}

// 15- reverse
const reverseTest = [1, 3, 5, 7, 8];
reverseTest.reverse();
console.log(reverseTest);

// 16- métodos de string (trim)
const trimTest = "   testando\n";
console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// 17- padStart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0"); // adiciona no começo
console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(7, "5"); //adiciona no fim
console.log(testePadEnd);

// 18- split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// 20- join
const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);

const itensParaCompras = ["mouse", "teclado", "monitor"];

const fraseDeCompra = `Precisamos comprar ${itensParaCompras.join(", ")}. `;
console.log(fraseDeCompra);

// 21- repeat
const palavra = "teste ";
console.log(palavra.repeat(3));

// 22- rest operator
const somaInfinita = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(somaInfinita(2, 7));
console.log(somaInfinita(43, 56, 235, 76));

// 23- for...of
const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};
console.log(somaInfinita2(34, 54, 22));

// 24- destructuring de objetos
const userDetails = {
  firstName: "Pedro",
  lastName: "Rocha",
  job: "Programador",
};
const { firstName, lastName, job } = userDetails;
console.log(firstName, lastName, job);

//renomear variaveis
const { firstName: primeiroNome } = userDetails;
console.log(firstName);

// 25- destructuring de arrays
const myList = ["aviao", "moto", "carro"];

const [veiculoA, veiculoB, veiculoC] = myList;
console.log(veiculoA, veiculoB, veiculoC);

// 26- JSON
const myJSON =
  '{"name": "Pedro", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}';
console.log(myJSON);
console.log(typeof myJSON);

// 27- JSON para objeto(PARSE) e objeto para JSON(stringify)
const myObject = JSON.parse(myJSON);
console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

            //JSON invalido
// const badJSON = '{"name": Pedro, "age": 31}';
// const MYbADoJECT = JSON.parse(badJSON);

const myNewJSON = JSON.stringify(myObject);
console.log(myNewJSON);
console.log(typeof myNewJSON);
