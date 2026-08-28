// 1- Var, let e const
var x = 10;
var y = 15;
if (y > 10) {
  var x = 5;
  console.log(x);
}
console.log(x);

let a = 10;
let b = 15;
if (b > 10) {
  let a = 5;
  console.log(a);
}
console.log(a);
//Usando "var" um valor é sobreescrito, que causa a perda esse valor. Já com o "let" esse valor não é perdido

function logName() {
  const name = "Pedro";
  console.log(name);
}
const name = "Mateus";
logName();
console.log(name);
//Usando chaves "{}", o valor não se perde, pois o bloco não afeta as variaveis fora do bloco

// 2- arrow functions
const sum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return `Ola ${name}`;
  } else {
    return "Ola";
  }
};
console.log(greeting("Pedro"));
console.log(greeting());

const user = {
  name: "Jose",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 10000); // Como esta dentro de uma funçao, o objeto "user" é perdido, fazendo o this apontar para o objeto do navegador "window"
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 20000); //Por estar em uma arrowfunction, quando chamado a função o this é o proprio objeto "user", a arrowfunction ignora o fato de estar em um setTimeout e mantemo this do pai "user"
  },
};
user.sayUserName();
user.sayUserNameArrow();

// 3- Filter
//Método de array praa filtrar dados

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const highNumbers = array.filter((n) => {
  if (n > 3) {
    return n;
  }
});
console.log(highNumbers);

const users = [
  { name: "Pedro", available: true },
  { name: "Lucas", available: true },
  { name: "Joana", available: true },
  { name: "Jose", available: false },
  { name: "Carol", available: false },
];
const availableUsers = users.filter((user) => user.available);
console.log(availableUsers);

// 4- Map
//É um método de arrray, que é utilizado para modificar o array de origem

const products = [
  { name: "Camisa", price: 29.99, category: "Roupas" },
  { name: "Microondas", price: 199.99, category: "Eletro" },
  { name: "Air fryer", price: 129.99, category: "Eletro" },
  { name: "Calça", price: 59.99, category: "Roupas" },
  { name: "Meias", price: 4.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// 5- Template literals (``)
const userName = "Pedro";
const age = 20;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`);

// 6- Destructuring
//Desestrutura dados complexos em várias variaveis, pode ser utilizado em arrays e objetos.

const fruits = ["Banana", "Laranja", "Abacaxi", "Perâ"];
const [f1, f2, f3] = fruits;
console.log(f2, f1);
const productDetails = {
  name: "Teclado",
  price: 59.99,
  category: "Periférico",
  color: "branca",
};
const { name: productName, price, category, color } = productDetails;
console.log(
  `O nome do produto é ${productName}, ele custa R$${price} e é da cor ${color}`,
);

// 7- Spread operator
//Utilizado para inserir novos valores em um array ou objeto, ele pode unir dois arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7];

const array3 = [...array1, ...array2];
console.log(array3);

const array4 = [0, ...array3, 8];
console.log(array4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 100000, price: 59.999 };
const car = { ...carName, ...carBrand, ...otherInfos };
console.log(car);

// 8- Classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}
const shirt = new Product("Camisa polo", 69.99);
console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(20));

// 9- Herança
//Recurso para uma classe herdar um método e propriedades de outra classe

class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são: ");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}
const hat = new ProductWithAttributes("Chapéu", 10.99, [
  "Preto",
  "Vermelho",
  "Azul",
  "Rosa",
]);
console.log(hat);
console.log(hat.name);
hat.showColors();
