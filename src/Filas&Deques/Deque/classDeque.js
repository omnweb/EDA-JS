// Deques implementantam tanto os princícios FIFO qto LIFO, podemos dizer que combina as estruturas de
// pilhas e filas

export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // Methods
  // Ao adicionar um elemento na frente do deque existem 3 cenários:
  addFront(element) {
    if (this.isEmpty()) {
      //Cenário em que o Deque está vazio, elemento é adicionado ao final, q tbm será a frente
      this.addBack(element);
    } else if (this.lowestCount > 0) {
        // Cenário em que elemento é removido da frente do deque, lowestCount é > = 0
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
        // LowestCount = 0
      for (let i = this.count; i < 0; i--) {
        this.items[i] = this.items[i - 1]; //MOve os elementos para deixar a primeira posição vazia
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

// const deque = new Deque();
// console.log(deque.isEmpty()); // true
// deque.addBack('Jhon');
// deque.addBack('Jack');
// console.log(deque.toString()); //Jhon,Jack
// console.log(deque.isEmpty()); // false
// deque.addBack('Camila');
// console.log(deque.size()); // 3
// deque.removeFront(); //Remove Jhon
// deque.removeBack(); // Remove Camila
// console.log(deque.toString()); //Jack
// deque.addFront('John');
// console.log(deque.toString());


