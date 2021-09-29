// Uma fila é uma coleção ordenada de ítens baseada em FIFO (First In, Fist Out)
// Deques são filas de duas pontas ou duplamente terminada

// CLASS QUEUE

export class Queue {
    constructor () {
        this.count = 0; //  Ajuda a controlar o tamanho da fila
        this.lowestCount = 0; // Criada para controle do 1º elemento da fila
        this.items = {}; //
    }

    // Methods

    // ENQUEUE => Adiciona um elemento ao final da fila conforme FIFO
    enqueue (element) {
        this.items[this.count] = element; //Count será a chave do objeto items
        this.count++;
    }

    // DEQUEUE => Remove elementos da Fila, sempre o 1º elemento
    dequeue () {
        if (this.isEmpty()) { // Verifica se a fila está vazia 
            return undefined; 
        }
        const result = this.items[this.lowestCount]; // Armazena o valor da frente
        delete this.items[this.lowestCount]; // Remove o mesmo
        this.lowestCount++;
        return result;
    }

    // PEEK => Verifica o primeiro elemento da fila 
    peek () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

   // ISEMPTY => Verifica se a fila está vazia
   // Retorna a diferença entre as chaves, ex: count tem 2 
   //e lowestCount = 0, se removermos um elemento, count terá 2 e lowestCount 1

    isEmpty () {
        return this.count - this.lowestCount === 0; 
    }

    // SIZE => Retorna apenas a diferença

    size () {
       return this.count - this.lowestCount;
    }

    // CLEAR => Para limpar a fila pode-se chamar o método dequeue até que retorne undefined ou
    // Podemos reiniciar os valores da classe

    clear () {
        this.count = 0;
        this.lowestCount = 0; 
        this.this.items = {}; 
    }

    // TOSTRING => 
    toString () {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) { // Caso lowestCount 0 tenha sido deletado
            objString = `${objString}, ${this.items[i]}`;            
        }
        return objString;
    }
    
}
 // Emular a remoção da fila
    // items = {
    //     0:5,
    //     1:8
    // };
    // count = 2;
    // lowestCount = 0;

// // Executando a Classe
// const queue = new Queue();
// // Verificando se está vazio
// console.log(queue.isEmpty()); // Exibe true

// // Adicionando elementos
// queue.enqueue('Jhon');
// queue.enqueue('Jack');
// // Verificando se está vazio
// console.log(queue.isEmpty()); // Exibe false
// // Mostra quem está no topo
// console.log(queue.peek()); // Exibe Jhon
// // Exibe a fila em string
// console.log(queue.toString()); // Jhon, Jack
// queue.enqueue('Camila');
// // Verifica o tamanho da fila
// console.log(queue.size()); // Exibe 3

// // Remove da fila
// queue.dequeue() // Remove Jhon
// queue.dequeue() // Remove Jack

// console.log(queue.toString()); // Camila







