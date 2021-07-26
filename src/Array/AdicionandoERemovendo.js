// Adicionando e removendo de posições expecíficas

// Removendo do array 3 elementos a partir da posição 5
let numbers = [ -3, -2 , -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

// Método Splice
// Recebe como parámetros onde inicia e onde termina a fatia
numbers.splice(5,3)

// Adicionando no array elementos 2, 3, 4 a partir da posição 5
numbers.splice(5, 0, 2, 3, 4)

numbers.splice(5, 3, 2, 3, 4)

console.log(numbers)

