// CLASSE STACK utilzando array e o princípio LIFO
class Stack {
    constructor() {
        this.items = [];
    }
        // PUSH, responsável pela adição de novos elementos ao topo da fila
    // Como quem aramazena os dados da pilha é um array, podemos usar o método push 

    push(element) {
        this.items.push(element)
    }

    // POP, remove elementos do topo da pilha
    pop(){ 
        return this.items.pop();
    }

    // PEEK, verifica o ultimo elemento adicionado no topo da fila

    peek() {
        return this.items[this.items.length -1]
    }

    // isEmpty, Verifica se a pilha está vazia, retornando true se sim e false se não
    isEmpty() {
        return this.items.length === 0;
    }

    // SIZE, verifica o tamanho da pilha
    size() {
        return this.items.length
    }

    // CLEAR, Limpa os elementos da pilha

    clear() {
        this.items = [];
    }
} //class

const stack = new Stack()
console.log(stack.isEmpty()); //true

stack.push(5);
stack.push(8);

console.log(stack.peek()); // 8

stack.push(8);

console.log(stack.size()); // 3

console.log(stack.isEmpty()); //false

console.log(stack.clear()); // 3

console.log(stack.isEmpty()); //true


stack.push(5);
stack.push(8);
stack.push(11);

console.log(stack.size()); // 3

stack.push(15);

stack.pop();
stack.pop();

console.log(stack.size()); // 2











