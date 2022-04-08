export class Node {
    constructor (element) {
        this.element = element;
        this.next = undefined;
    }
}

export class DoublyNode extends Node { // Para herdar element e next, devemos chamar o construtor da classe Node
    constructor(element, next, prev) { 
        super(element, next);
        this.prev = prev; // Propriedade especial
    }
}