// O método Fill preenche o Array com um valor
let numbers = Array.of(1,2,3,4,5,6);

console.log(numbers.fill(0)); // Preenche todas as 6 posições com 0

// É possível passar o índice de início
console.log(numbers.fill(2, 1)); // [ 0, 2, 2, 2, 2, 2 ]

// e o índice de fim

console.log(numbers.fill(1, 3, 5)); // [ 0, 2, 2, 1, 1, 2 ]

// Esse método é ótimo para criar um array e inicializar com valores

let ones = Array(6).fill(1); // Cria um array de 6 posições preenchidas com 1
