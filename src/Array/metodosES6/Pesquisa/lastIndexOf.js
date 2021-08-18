// Retorna o índice do ultimo elemento correspondente ao argumento passado

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.push(10); 
//numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 10 ]

console.log('Posição:', numbers.lastIndexOf(10)) //Posição: 15
console.log('Posição:', numbers.lastIndexOf(100)) //Posição: -1
