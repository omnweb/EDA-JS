// Para converter um número decimal para binário divimos por 2 até que o resultado da divisão seja 0

// 10/2 == 5 rem == 0
//    5/2 == 2 rem == 1
//      2/2 == 1 rem == 0
//        1/2 == 0 rem == 1   resultado de baixo para cima 1010

class Stack {
  constructor(element) {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2); // Math.floor usado para obter números inteiros das operações
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(decimalToBinary(20));
console.log(decimalToBinary(1000));
console.log(decimalToBinary(233));
