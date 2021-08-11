let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.reverse()); //Invertendo para utilizar função de ordenação

// console.log(numbers.sort()) // retorna [ 1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Isso ocorre pq sort deixa os elementos em ordem lexicográfica e pressupõe q tds el são strings

// IMPLEMENTANDO função própria de ordenação
console.log(numbers.sort((a,b) => a - b));

// Devolve um número negativo se b > a, um nº positivo se a > b e 0 se forem iguais
// Esses resultados negativos, positivos e 0, serão utilizadas pela função sort


// O código acima é o mesmo que:
function compare(a, b) {
    if( a < b) {
        return -1
    }
    if( a > b) {
        return 1
    }
    // a == b
    return 0
}
