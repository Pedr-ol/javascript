// 1- movendo com DOM
console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2- encontrando elementos por tag
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3- encontrando elementos por id
const listId = document.getElementById("title");
console.log(listId);

// 4- encontrando elementos por classe
const listClass = document.getElementsByClassName("product");
console.log(listClass);

// 5- encontrando elementos por CSS
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 6- insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// 7- appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8- replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Titulo alterado com JS";

header.replaceChild(h2, title);

// 9- createTexNode
const myText = document.createTextNode("Mais um título com JS");
console.log(myText);

const h3 = document.createElement("h3");
h3.appendChild(myText);
console.log(h3);

mainContainer.appendChild(h3);

// 10- atributos
const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com"); //abre o site do google
firstLink.setAttribute("target", "_blank"); //abre o site em outra aba

// 11- altura e largura de elementos
const footer = document.querySelector("footer");

console.log(footer.offsetWidth); // mostra a largura
console.log(footer.offsetHeight); //mostra a altura

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12- posição do elemento
const product1 = listClass[0];

console.log(product1.getBoundingClientRect()); // mostra as propriedades do elemento

// 13- CSS com JS
mainContainer.style.color = "green";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "20px";
mainContainer.style.paddingLeft = "10px";

// 14- HTMLCollection - seleciona vários elementos
for (const li of listItens) {
    li.style.backgroundColor = "lightblue";
    li.style.padding = "5px"
}
