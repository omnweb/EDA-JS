// Classe de listas ligadas
// FUnciona como por exemplo uma caça ao tesouro onde uma pista leva a outra até o tesouro
// Neste caso um elemento leva outro através de um ponteiro []=>[]=>[]

import {defaultEquals} from '../util';
import {Node} from './models/linked-list-models';

export default  class LinkedList {
    constructor () {
        this.count = 0;
        this.head = undefined; 
        this.equalsFn = function defaultEquals(a, b) {
            return a === b;
        }
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
        if (index >= 0 && index <= this.count) { 
            const node = new Node(element); //Elemento que queremos adc na fila
            if (index == 0) { // Adiciona na 1ª posição
                const current =  this.head; // Primeiro el da fila
                node.next = current; // Adiciona o elemento na primeira posição
                this.next = node;
            } else {
                const previous = this.getElementAt(index - 1); // Percorre um laço ate que a posição anterior a q desejamos adc um elemento seja encontrada
                const current = previous.next; // current referencia uma posição posterior à que será inserido o novo nó
                node.next = current; //liga o novo nó a current
                previous.next = node; // Agora previous.next aponta para o nó ao invés de apontar para current
            }
            this.count++;
            return true;
        }
        return false; //Devolve false se não existir nada na lista
    }

    // DEVOLVE UM ELEMENTO DE POSIÇÃO EXPECÍFICA, CASO ESTE NÃO EXISTE RETORNA UNDEFINED
    getElementAt(index) {
        if (index >=0 && index <= this.count) { //Verifica se index é válido
            let current = this.head; // Inicianos o nó com o primeiro elemento
            for (let i = 0; i < index && current != null; i++) { // Percorre até alcançar o índex desejado
                current = current.next;   //Ao sair do laço o current referenciará o elemento na posição index             
            }
        return current;
        }
        return undefined; // Devolve undefined caso inválido
    }

    // removeAt(index) {
    //     const index = this.indexOf(element);
    // return this.removeAt(index);
    //     if ( index >= 0 || index < this.count) { // Verifica se o index é válido, varia de 0 ao tamanho da lista
    //         let current =  this.head; // Current referencia o elemento atual, o mesmo q será removido
    //         Remove o primeiro item
    //         if (this.head === 0) {
    //             this.head = current.next;
    //         } else {
    //             let previous;// Referencia um elemento anterior ao atual (current)
    //             for (let i = 0; i < index.length; i++) {
    //                 const element = index[i];
    //                 previous = current; //Anterior recebe o atual
    //                 current = current.next; // Atual recebe o próximo
    //                 // Isso faz com que current seja perdido e o coletor de lixo o retire da memória
    //             }
    //             // faz a ligação de previous com o next de current: pula esse elemento para removê-lo  
    //             previous.next = current.next; // Faz referência ao último nó da lista
    //         }
    //     }
    //     return undefined // index inválido retorna undefined
    // }

     ///////////////////////////////////
    // ↓ Refatoração do código acima
    ////////////////////////////////////

    // REMOVE UM ELEMENTO EXPECÍFICO
    removeAt(index) {
        if ( index >= 0 || index < this.count) { // Verifica se o index é válido, varia de 0 ao tamanho da lista
            let current =  this.head; // Current referencia o elemento atual, o mesmo q será removido
            // Remove o primeiro item
            if (index === 0) {
                this.head = current.next; // Para remover o primeiro elemento, basta head apontar para o segungo elemento
            } else {
                const previous = this.getElementAt(index - 1); // Referencia um número anterior a current
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined // index inválido retorna undefined
    }
    
    // REMOVE UM ELEMENTO
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    // DEVOLVE O ÍNDICE DO ELEMENTO DA LISTA, CASO ESTE NÃO EXISTA, RETORNA -1
    indexOf(element) {
        let current =  this.head; //current auxiliará a percorrer a lista 
        for (let i = 0; i < this.count && current! null, i++) {
           if (this.equalsFnl(element, current.element)) { // Verifica se o elemento que procuramos é igual ao nó current
               return i; // Devolve a posição se o el for == current
           }     
           current = current.next; // Se não for == current, passa para o próximo nó
        }
        return -1; // caso o  valor não seja encontrado devolvemos -1
    }

    // DEVOLVE TRUE SE A LISTA ESTIVER VAZIA E FALSE DO CONTRÁRIO
     isEmpty() {
        return this.size() === 0;
    }
    //DEVOLVE A VARIÁVEL PRIVADA HEAD
    getHead() {
        return this.head;
    }

    // DEVOLVE A QUANTIDADE DE ELEMENTOS DA LISTA
    size() {
        return this.count;
    }

    clear() {
        this.head = undefined;
        this.count = 0;
    }

    // DEVOLVE UMA REPRESENTAÇÃO EM STRING DA LISTA LIGADA
    toString () {
        if (this.isEmpty()) { // Se a lista estiver vazia, head será null ou undefined
            return '';
        }
        let objString = `${this.head.element}`; // Inicia a variável que será devolvida com o primeiro elemento
        let current = this.head.next

        for (let i = 0; i < this.size() && current != null; i++) { //Iterando por todos os elementos da lista 
            objString = `${objString}`, `${current.element}`; // E adicionamos os valores a nossa string
            current = current.next;
        }
        return objString; //Retorna o conteúdo da lista
    }
}