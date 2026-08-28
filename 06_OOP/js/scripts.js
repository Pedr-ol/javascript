// 1- métodos
const animal = {
  nome: "Bob",
  latir: function () {
    console.log("au au au");
  },
};
animal.latir();

const pessoa = {
  nome: "Pedro",
  getNome: function () {
    return this.nome;
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};
console.log(pessoa.getNome());
pessoa.setNome("Matheus");
console.log(pessoa.getNome());

// 2- prototype
const text = "asdfghjk";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(arr.length);
console.log(Object.getPrototypeOf(arr));

const myObject = {
  a: "b",
};
console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 3- classes básicas
const cachorro = {
  raca: null,
  patas: 4,
};
const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "pastor alemão";
console.log(pastorAlemao);
console.log(pastorAlemao.pastas);

// 4- funções como classes - construtora
function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");
console.log(bob);

const jack = criarCachorro("Zeus", "Pit bull");
console.log(jack);
console.log(Object.getPrototypeOf(jack));

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}
const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);

// 5- funções com métodos
Cachorro.prototype.uivar = function () {
  console.log("Auuuuuuu");
};
console.log(Cachorro);
husky.uivar();

// 6- classes es6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }
  descreverCaminhao() {
    console.log(`Este caminhao tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }
}

const scania = new Caminhao(6, "preta");
console.log(scania);

scania.descreverCaminhao();

Caminhao.prototype.motor = 4.0;
const c3 = new Caminhao(6, "vermelho");
console.log(c3.motor);

// 7- override
class Human {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pedro = new Human("Pedro", 20);
console.log(pedro);
console.log(Human.prototype.idade);

Human.prototype.idade = "Não definida"; //override
console.log(pedro.idade);
console.log(Human.prototype.idade);

// 8- simbolos em classe
class Aviao {
  constructor(marcas, turbinas) {
    this.marcas = marcas;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);

// 9- getters e setters
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Você esta lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  }
}

const myPost = new Post("Algum post", "É um post sobre programação");
console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js";
console.log(myPost);

// 10- Herança
class Ave {
  constructor(penas) {
    this.penas = penas;
  }
}

class Galinha extends Ave {
  constructor(penas, nome) {
    super(penas, penas);
    this.nome = nome;
  }
}

const chicken = new Galinha(200, "pintadinha");
console.log(chicken);
console.log(chicken.penas);

// 11- instanceof
console.log(chicken instanceof Ave);
console.log(Galinha instanceof Ave);
console.log(new Galinha(160, "teste") instanceof Ave);
