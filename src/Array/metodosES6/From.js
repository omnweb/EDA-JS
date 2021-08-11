// Método FROM ( Array.from) cria outro array a partir fr um array existente

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let numbers2 = Array.from(numbers).reverse() // revertendo posições

// for(const n of numbers2){
//     console.log(n) // 15,14,13...
// }

// Passando função para determinar quais valores farão parte do array

let evens = Array.from(numbers, x => x % 2 == 0) // Salvando apenas pares

// O código retorna true se for PAR e false se for Ímpar
for(const n of evens){
    console.log(n) // true, false, true ... 
}