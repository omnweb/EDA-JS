// Classe de listas ligadas
// FUnciona como por exemplo uma caça ao tesouro onde uma pista leva a outra até o tesouro
// Neste caso um elemento leva outro através de um ponteiro []=>[]=>[]

import {defaultEquals} from '../util';
import {Node} from './models/linked-list-models';

export default  class LinkedList {
    constructor () {
        this.count = 0;
        this.head = undefined; 
        this.equalsFn = equalsFn;
    }

    // ADICIONA AO FINAL DA LISTA
    // Existem 2 senarios, o que a lista está vazia e adcionamos o primeiro elemento
    // O outr que já existe elementos e concatenamos o novo elemento a ela.
    push(element) {
        const node =  new Node(element); // Primeiro passo é criar um nó e passar o EL para ele como valor
        let current; 
        // Senário 1
        // QUando criamos um novo linkedList, o head sempre apontará para undefined
        if (this.head == null) { // Lista vazia
            this.head = node; // Passamos o valor do elemento para o cabeçalho
            //O próximo elemento node será automaticamente undefined
        } else {
            current = this.head;// Aponta para o ítem atual
            while (current.next != null) { // Obtem o último ítem
                current = current.next;
            }
        current.next = node; // Atribui o novo elemento a next para criar a ligação
        }
        this.count++; //Incrementa o tamanho da lista
    }

    // ADICIONA EM UMA POSIÇÃO EXPECÍFICA
    insert(element, position) {

    }

    // DEVOLVE UM ELEMENTO DE POSIÇÃO EXPECÍFICA, CASO ESTE NÃO EXISTE RETORNA UNDEFINED
    getElementAt(index) {

    }

    // REMOVE UM ELEMENTO
    remove(element) {

    }

    // REMOVE UM ELEMENTO EXPECÍFICO
    removeAt(position) {

    }

    // DEVOLVE O ÍNDICE DO ELEMENTO DA LISTA, CASO ESTE NÃO EXISTA, RETORNA -1
    indexOf() {

    }

    // DEVOLVE TRUE SE A LISTA ESTIVER VAZIA E FALSE DO CONTRÁRIO
    isEmpty() {

    }

    // DEVOLVE A QUANTIDADE DE ELEMENTOS DA LISTA
    size() {

    }

    // DEVOLVE UMA REPRESENTAÇÃO EM STRING DA LISTA LIGADA
    toString () {

    }
}