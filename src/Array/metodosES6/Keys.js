// O Método keys devolve @@iterators que contém as chaves do Array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const aKeys = numbers.keys() // Obtem um iterador de chaves
// itera retornando false enquanto o array ainda contiver chaves
// retorna value: undefined e done: true quando terminarem as chaves
console.log(aKeys.next()) // {value: 0, done: false}
console.log(aKeys.next()) // {value: 1, done: false}
console.log(aKeys.next()) // {value: 2, done: false}



