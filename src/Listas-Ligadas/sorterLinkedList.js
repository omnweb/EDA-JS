import LinkedList from "./linkedListClass";
import { Compare, defaultCompare, defaultEquals } from '../util';

// Sort Linked List herda os metodos da LinkedList, mas com função especial para comparar elementos
class SorterLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.equalsFn = equalsFn;
        this.compareFn = compareFn;
      }

    push(element) {
        if (this.isEmpty()) {
          super.push(element);
        } else {
          const index = this.getIndexNextSortedElement(element);
          super.insert(element, index);
        }
      }

    // Sobrescrevendo o metodo insert de LinkedList
    insert(element, index) { // Atribuindo um valor defalt ao index para evitar a inserção em quualquer índice
        if (this.isEmpty()) { 
            return super.insert(element, index === 0 ? index : 0); // Se a lista estiver vazia passa o elemento e o 0 como index
        }

        const pos = this.getIndexNextSortElement(element); // Obtendo a posição do elemento a ser inserido
        return super.insert(element, pos); // Inserindo o elemento na posição correta
    }

    // Método para ordenar a lista
    // Itera sobre a lista até encontrar uma posição para inserir o elemento ou até percorrer toda a lista

    getIndexNextSortElement(element) {
        let current = this.head;
        let i = 0;
        for (; i< this.size() && current; i++) {
            const comp = this.compareFn(element, current.element); // Comparando os elementos
            if (comp === Compare.LESS_THAN) { // Se o elemento for menor que o elemento atual
                return i; //Inserimos o elemento na posição i
            }
            current = current.next;
        }
        return i; // Neste caso devolve o tamanho da lista e o elemento será inserido no final
    }
}

export default SorterLinkedList;

const orderList = new SorterLinkedList();

orderList.insert(1);
console.log(orderList.getHead());


// console.log(orderList.toString());
