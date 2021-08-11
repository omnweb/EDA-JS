// Para acessar interator, é necessário acessar a propriedade Symbol.interator do array:

let iterator = numbers[Symbol.iterator]();

// Para exibir

console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2
console.log(iterator.next().value) // 3
console.log(iterator.next().value) // 4
console.log(iterator.next().value) // 5

console.log('--------------------------')

iterator = numbers[Symbol.iterator]();

for(n of iterator){
    console.log(object)
}

