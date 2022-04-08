// LISTA DUPLAMENTE LIGADA

import { DoublyNode } from '../models/linked-list-models';
import { defaultEquals } from '../util';
import LinkedList from './linkedListClass';

export default class DoublyLinkedList extends LinkedList { // Herda todas as propriedades da classe LinkedList
    constructor(equalsFn = defaultEquals){
        super(equalsFn);
        this.tail = undefined; // Último elemento da lista
    }

    // MÉTODOS

    push(element) {
        const node = new DoublyNode(element);
        if (this.head == null) {
          this.head = node;
          this.tail = node; // NEW
        } else {
          // attach to the tail node // NEW
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
        }
        this.count++;
      }

    // Insere um novo elemento em qualquer posição
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) { // Se a lista estiver vazia
                    this.head = node; //aponta para o novo nó
                    this.tail = node; //aponta para o novo nó
                } else { // Se a lista não estiver vazia
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

    // Remove um elemento de qualquer posição
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) { // Remover o primeiro elemento
                this.head = current.next; // O próximo elemento será o novo primeiro
                if (this.count === 1) {
                    this.tail = undefined; // ultimo elemento será undefined
                } else {
                    this.head.prev = undefined; // Elemento anterior ao primeiro recebe undefined
                }
            } else if (index === this.count - 1) { // last item
                current = this.tail; // Recebe a referencia do penultimo elemento
                this.tail = current.prev; // Recebe a referencia do antepenultimo elemento
                this.tail.next = undefined; // Passa a ser o último elemento
            } else {
                current = this.getElementAt(index); // Faz a iteração até o a posição que será removida
                const previous = current.prev; // Recebe a referencia do elemento anterior
                previous.next = current.next; // O elemento anterior passa a ser o elemento seguinte
                current.next.prev = previous; // O elemento seguinte passa a ser o elemento anterior
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current != null) {
          if (this.equalsFn(element, current.element)) {
            return index;
          }
          index++;
          current = current.next;
        }
        return -1;
      }
    
      getHead() {
        return this.head;
      }
    
      getTail() {
        return this.tail;
      }
    
      clear() {
        super.clear();
        this.tail = undefined;
      }
    
      toString() {
        if (this.head == null) {
          return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        while (current != null) {
          objString = `${objString},${current.element}`;
          current = current.next;
        }
        return objString;
      }
    
      inverseToString() {
        if (this.tail == null) {
          return '';
        }
        let objString = `${this.tail.element}`;
        let previous = this.tail.prev;
        while (previous != null) {
          objString = `${objString},${previous.element}`;
          previous = previous.prev;
        }
        return objString;
      }
}

let newElement = new DoublyLinkedList();

// newElement.push(1);
// newElement.push(2); 
// console.log('head',newElement.getHead());
// console.log('tail',newElement.getTail());
// newElement.insert(3, 1);
// newElement.removeAt(1);
// console.log(newElement.indexOf(3));
// console.log(newElement.toString());
// console.log(newElement.inverseToString());