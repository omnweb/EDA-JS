// Modificando o algorítimo decimalParaBinário para que funcione como um conversor
// transformando de decimal para bases de 2 a 36, usando uma variável como divisor
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

const baseConverter = (decNumber, base) => {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';

    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem);
        number = Math.floor(number / base)
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }

    return baseString
}

console.log(baseConverter(100345, 2)) //11000011111111001
console.log(baseConverter(100345, 8)) //303771
console.log(baseConverter(100345, 16)) //187F9
console.log(baseConverter(100345, 35)) //2BW0
console.log(baseConverter(100345, 40)) // ''