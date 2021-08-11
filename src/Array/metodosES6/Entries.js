// Entries devole @@interators, que possui par de chave e valor
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let aEntries = numbers.entries(); //Obtem um iterador de chave e valor

console.log(aEntries.next.value); // [0, 1] posição 0 valor 1
console.log(aEntries.next.value); // [1, 2] posição 1 valor 2
console.log(aEntries.next.value); // [2, 3] posição 2 valor 3

// Como o Array numbers possui somente números, key sera a posiçao e válue será o valor armazenado no índice do array

// Código alteranativo
aEntries = numbers.entries()
for(const n of aEntries){
    console.log(n)
}