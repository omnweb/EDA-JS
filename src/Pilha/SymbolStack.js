// A Classe stack anterior não era protegida
// Usaremos underscore como convenção de nomenclatura, mas isso não protege, apenas indica variável privada

// NOTA: symbo é imutável e pode ser usado como propriedade de um objeto

// Usando símbolos no escopo
const _items = Symbol('stackItems')
class Stack {
  constructor() {
    this.[_items] = [];
  }

  //   Para acessar a variável _items = this.[_items]
  // É possível utilizar o método Object.getOwnPropertySymbols()

  // METODOS
   push(element) {
        this.[_items].push(element)
    }

    // POP, remove elementos do topo da pilha
    pop(){ 
        return this.[_items].pop();
    }

    // PEEK, verifica o ultimo elemento adicionado no topo da fila

    peek() {
        return this.[_items][this.[_items].length -1]
    }

    // isEmpty, Verifica se a pilha está vazia, retornando true se sim e false se não
    isEmpty() {
        return this.[_items].length === 0;
    }

    // SIZE, verifica o tamanho da pilha
    size() {
        return this.[_items].length
    }

    // CLEAR, Limpa os elementos da pilha

    clear() {
        this.[_items] = [];
    }

}

  // Explorando e fazendo um hack na classe stack
    const stack = new Stack();
    stack.push(5);
    stack.push(8);

    let objectSymbols = Object.getOwnPropertySymbols(stack);
    console.log(objectSymbols.length); // 1
    console.log(objectSymbols); // [ Symbol(stackItems) ]
    console.log(objectSymbols[0]); // Symbol(stackItems)
    stack[objectSymbols[0]].push(1); //
    console.log(stack) // Retorna: Stack { [Symbol(stackItems)]: [ 5, 8, 1 ] } 

    // Vimos que simbols tbm podem ser acessados e alterados