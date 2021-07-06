var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let string = num.reduce(function(acumulador, numero) { return acumulador + ' - ' + numero });

console.log(string);