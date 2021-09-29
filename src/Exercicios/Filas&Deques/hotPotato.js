// Jogo da Batata quente, representação usando uma fila circular
// A batata é passada de mãos em mãos no círculo, quando para quem está com a batata, sai da roda

// const Queue = require('../../Filas&Deques/Fila/ClassQueue');
import {Queue} from '../../Filas&Deques/Fila/ClassQueue';

function hotPotato(elementsList, num) {
    const queue = new Queue();
    const eliminatedList = [];
    
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);  // Recebendo e enfileirando uma lista de nomes
    }

    while(queue.size() > 1) {
        for (let i = 0; i < num; i++) { // Recebe o número de iterações
            queue.enqueue(queue.dequeue());// Remove um ítem do início e adiciona no final
        }
        eliminatedList.push(queue.dequeue()); // Quando num é alcançado, o mome será removido da fila
    }

    return {
       eliminated: eliminatedList,
       winner: queue.dequeue() // Quando restar apenas um nome, esse será declarado vencedor
    }    
}

const names = ['John', 'Jack', 'Camila', 'Ingred', 'Carl'];
    const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
    console.log(`${name} foi eliminado(a) do jogo Hot Potato`)
});

console.log(`O vencedor(a) é: ${result.winner}`);
