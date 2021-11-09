// LISTA DUPLAMENTE LIGADA

import { defaultEquals } from '../util';
import LinkedList from './linkedListClass';

class DoublyNode extends Node { // Para herdar element e next, devemos chamar o construtor da classe Node
    constructor(element, next, prev) { 
        super(element, next);
        this.prev = prev; // Propriedade especial
    }
}

class DoublyLinkedList extends LinkedList { // Herda todas as propriedades da classe LinkedList
    constructor(equalsFn = defaultEquals){
        super(equalsFn);
        this.tail = undefined; // Último elemento da lista
    }


    // MÉTODOS

    // Insere um novo elemento em qualquer posição
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) { // Se a lista estiver vazia
                    this.head = node; //aponta para o novo nó
                    this.tail = node; //aponta para o novo nó
                } else { // Caso contrário
                    node.next = this.head; // Fará referência ao primeiro elemento da lista
                    current.prev = node; // Apontará para o novo elemento
                    this.head = node; // Referencia o nó, que será o primeiro elemento da lista
                }
            } else if (index === this.count) { // last item NEW
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node; // NEW
                node.prev = previous; // NEW
            }
            this.count++;
            return true;
        }
        return false;
    }
}