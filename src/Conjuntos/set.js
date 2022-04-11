// Implementação própria da classe Set, disponível a partir do ECMAScript 2015;

class Set {
  constructor() {
    this.items = {}; // Utilizado um objeto para representar o conjunto items, porém pode ser um array
  }

  // Metodos de acesso

  // Retorna true se houver o elemento no conjunto e false caso contrário;
  // has(element) {
  //     return element in items; // Utilizando o operador in para verificar se o elemento está no conjunto
  // }

  //* No entanto ha uma maneira melhor de fazer esse método

  has(element) {
    // O protótipo de Object tem o método hasOwnProperty q devolve bool em relação a propriedade especificada
    return Object.prototype.hasOwnProperty.call(this.items, element);
    // ! Poderiamos utilizar this.items.hasOwnProperty(element), no entanto ferramentas eslint acusariam error
  }

  // Adiciona um elemento ao conjunto como chave e valor
  add(element) {
    if (!this.has(element)) {
      // Se o elemento não estiver no conjunto
      this.items[element] = element; // Adiciona o elemento ao conjunto
      //   console.log(this.items); // Retorna{ '1': 1, '2': 2 }
      return true; // Retorna true para informar que o elemento foi adicionado
    }
    return false;
  }

  // Remove um elemento do conjunto
  delete(element) {
    if (this.has(element)) {
      // Se o elemento estiver no conjunto
      delete this.items[element]; // Remove o elemento do conjunto
      return true; // Retorna true para informar que o elemento foi removido
    }
    return false;
  }

  // Limpa o conjunto

  clear() {
    this.items = {};
  }

  // Retorna o tamanho do conjunto
  // O metodo abaixo só funciona em navegadores mais recentes
  size() {
    return Object.keys(this.items).length; // Método keys retorna um array com todas as propriedades do objeto
  }

  // Método mais indicado para todos os navegadores
  sizeLegacy() {
    let count = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        //Iteramos verificando se a propriedade pertence ao objeto
        // Se o elemento pertence ao conjunto
        count++; // Incrementamos o contador em caso afirmativo
      }
    }
    return count; // Retornamos o valor do contador
  }

  // Retorna um array com todos os elementos do conjunto
  // O metodo abaixo só funciona em navegadores mais recentes, ECMAScript 2017
  values() {
    return Object.values(this.items); // Método values retorna um array com todos os valores das propriedades de um bjeto
  }

  // Método mais indicado para todos os navegadores
  valuesLegacy() {
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        //Iteramos verificando se a propriedade pertence ao objeto
        // Se o elemento pertence ao conjunto
        values.push(this.items[key]); // Adicionamos o valor do elemento ao array
      }
    }
    return values; // Retornamos o array
  }
}

export default Set;

const set = new Set();

set.add(1);
set.add(2);

console.log(set.size()); // 2
console.log(set.sizeLegacy()); // 2

console.log(set.values()); // [ 1, 2 ]
console.log(set.valuesLegacy()); // [ 1, 2 ]

// set.clear();
// set.delete(1);
// console.log(set.has(1)); // false

// console.log(set.has(1)); // true
// console.log(set.has(3)); // false
