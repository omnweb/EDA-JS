// CLASSE STACK utilzando OBJETO e o princípio LIFO

class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  // Metodos

  // PUSH
  push(element) {
    this.items[this.count] = element; // element é o valor
    this.count++; //Usada como a chave do objeto items
  }

  // SIZE
  size() {
    return this.count;
  }

  // IS EMPTY
  isEmpty() {
    return this.count === 0; //true ou false
  }

  //Lógica para remover elemento da pilha
  pop() {
    // verifica se a pilha está vazia
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count]; //Armazena o valor do topo da pilha para depois devolve-lo
    // Por se tratar de um objeto, podemos usar delet para remover um valor expecíco
    delete this.items[this.count]; //depois de removido
    return result;
  }

  // Lógica para visualizar o topo da pilha
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  // CLEAR Limpando a fila
    // clear() {
    //     this.count = 0;
    //     this.items = {};
    // }

    //  Opção para limpar a fila respeiTando o conceito LIFO 
    clear() {
        while(!this.isEmpty()) {
            this.pop();
        }
    }

    // TO STRING

    toString() {
        if (isEmpty) {
            return undefined;
        }
        let objString = `${this.items[0]}`; //Começando pela base 
        for (let i = 1; i < this.count; i++) { // pega todos os elementos, caso só tenha 1, para aqui
            objString = `${objString}, ${this.items[i]}`; // Adiciona os elementos separados por virgula
        }
        return objString;
    }
}

  // Executando

    const stack = new Stack();
    stack.push(5);
    stack.push(8);

// Verificando o tamanho da pilha

console.log(stack.size());

// Verificando se a pilha está vazia

console.log(stack.isEmpty());

// Excluindo o primeiro da pilha
console.log(stack.pop()); // Devolve o 8 e retira esse elemento do objeto



const stack2 = new Stack();
console.log(Object.getOwnPropertyNames(stack2)); // È possível atribuit novos valores às propriedades [ 'count', 'items' ]
console.log(Object.keys(stack2)); // retorna [ 'count', 'items' ]
console.log(stack2.items); // retorna [ 'count', 'items' ]

