let listaDeCompras = ["Banana","Maça","leite","Maça","Açucar","Café","Sal"];

//push = adiciona um ou mais elementos no final de uma array
listaDeCompras.push("Chocolate");
console.log(listaDeCompras);

//pop = Elimina o ultimo elemento de uma array
listaDeCompras.pop();
console.log(listaDeCompras);

//pop com variavel
let excluido = listaDeCompras.pop();
console.log(excluido);

//unshift = adiciona um ou mais elementos no inicio de uma array
listaDeCompras.unshift(22);
console.log(listaDeCompras);

//shift = elimina o primeiro elemento de uma array
listaDeCompras.shift();
console.log(listaDeCompras);

//indexOf = retorna um booleano
console.log(listaDeCompras.indexOf("Maça"));// se atentar aos parenteses 

//lastindexOf = Procura elementos de tras para frente
console.log(listaDeCompras.lastIndexOf("Maça"));// se atentar ao camelo 

// join = para unir os elementos dentro de uma array 
console.log(listaDeCompras.join("/"));

