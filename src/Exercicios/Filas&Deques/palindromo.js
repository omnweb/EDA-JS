// Verifica se a palavra é um paíndromo, ou seja se a palavra fica igual lida de tras para frente.
// Existem várias maneiras de se verificar a mesma coisa, mas usaremos as estrutura de DEQUE

import {Deque} from '../../Filas&Deques/Deque/classDeque'

function palindromeChecker(aString) {
    // verificando se a string é válida
    if (aString === undefined || aString === null || aString !== null && aString.length === 0) {
        return false
    }
    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(' ').join(''); //Transforma em minúsculas e remove espaços
    let isEqual = true;
    let firstChar, lastChar;

    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i)); // Insere os caracteres da string no deque      
    }

    while (deque.size() > 1 && isEqual) { // Enquanto houver elementos no deque e os elementos retirados forem iguais
        firstChar = deque.removeFront(); // Retira elemento da frente
        lastChar = deque.removeBack(); // Retira elemento de trás


        if (firstChar !== lastChar) { // Compara elemenstos retirados
            isEqual = false; // Se forem diferentes não é palíndromo. 
        }

        // Caso sobre uma letra, será palíndromo: 
        //ex: 'mirim', retiraria a primeira e ultima letra m e m, depois i e i e sobraria o r
    }
    return isEqual;
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kaiak', palindromeChecker('kaiak'));
console.log('Level', palindromeChecker('Level'));
console.log('Was it a car or a cat i Saw', palindromeChecker('Was it a car or a cat i Saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));

