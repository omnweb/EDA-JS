// Método Array.of cria outro array a partir dos argumentos passados para o método

let numbers = Array.of(1);
let numbers2 = Array.of(1,2,3,4,5,6);

// O código anterior é o mesmo que escrever o código a seguir:

let numbers3 = [1];
let numbers4 = [1,2,3,4,5,6];

// Tbm é possível fazer cópia de array existente, utilizando operador spread

let numbersCopy = Array.of(...numbers4);

console.log('1', numbers,'\n');
console.log('2', numbers2,'\n');
console.log('copia', numbers4,'\n');