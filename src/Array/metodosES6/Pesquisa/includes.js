// Devolve TRUE caso o elemento seja encontrado no array, e false caso contrário.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(100)); // false

let numbers2 = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.includes(4,5)); // False, pois não existe 4,5 na sequência e sim 4,6 e 6,5
