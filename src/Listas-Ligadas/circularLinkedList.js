import { defaultEquals } from '../util';
import LinkedList from './linkedListClass';
import { Node } from '../models/linked-list-models';

export default class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.getElementAt(this.size() - 1);
      current.next = node;
    }
    // set node.next to head - to have circular list
    node.next = this.head;
    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          // Se a lista estivar vazia
          this.head = node; // Adiciona o elemento ao início
          node.next = this.head; // Ligamos também o último nó ao primeiro
        } else {
            // Insere na primeira posição em uma lista não vazia
          node.next = current; // último nó aponta para o posterior
          current = this.getElementAt(this.size()); // obtem a referência do último elemento
          // update last element
          this.head = node;
          current.next = this.head;
        }
      } else { //Aqui permanece igual ao da linkes list
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head; // Elemento que será removido da lista
          current = this.getElementAt(this.size() - 1); // Último elemento da lista
          this.head = this.head.next; // Atualiza o head para o segundo elemento da lista
          current.next = this.head;
          current = removed;
        }
      } else {
        // no need to update last element for circular list
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}

let listaCircular = new CircularLinkedList();

listaCircular.push(1);
listaCircular.push(2);
// console.log(listaCircular.getHead());
// listaCircular.push(2);
// listaCircular.insert(3, 1);
listaCircular.removeAt(1);
console.log(listaCircular.toString());
// console.log(listaCircular.size());
// console.log(listaCircular.getElementAt(0));