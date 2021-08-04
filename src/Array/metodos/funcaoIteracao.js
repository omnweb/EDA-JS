// Ler um array e verificar se positivos = true, se negativos = false


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log('\n--------------------------------')

  ///////////////
 //   EVERY   //
///////////////

// Função every, itera o array até que a função devolva false, s
// Na primeira iteração o number 1 gera false, o 2 gera true e para a execução
const isEven = x => x % 2 === 0 ? true : false
console.log(numbers.every(isEven))
console.log('\n--------------------------------')

  ///////////////
 //  FOREACH  //
///////////////
numbers.forEach(x => console.log(x % 2 === 0 ));
console.log('\n--------------------------------')


  ///////////////
 //    MAP    //
///////////////
// Retorna um novo array com os valores gerados pela função

const myMap = numbers.map(isEven);
console.log(myMap[1]) // retorna true pq 2 é par
console.log('\n--------------------------------')

  ///////////////
 //   FILTER  //
///////////////
// Retorna um novo array com os valores para os quais a função retornou verdadeira

const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers);
console.log('\n--------------------------------')

  ///////////////
 //   REDUCE  //
///////////////
// Recebe os parâmetros (valor anterior, valor atual, index e o array), sendo index e array opcionais
// Pode ser usado para somar o valor devolvido pela função a um acumulador

const result = numbers.reduce((previous, current) => previous + current) // Resultado 120
console.log(result);
console.log('\n--------------------------------')