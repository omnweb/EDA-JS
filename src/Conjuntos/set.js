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

  // Operações de conjuntos

  // *UNION
  // Retorna um novo conjunto com os elementos do conjunto atual e o conjunto passado como parâmetro

  union(otherSet) {
    const unionSet = new Set(); // Criamos um novo conjunto para representar o resultado da união
    this.values().forEach((value) => unionSet.add(value)); // Adicionamos todos os elementos do conjunto atual ao novo conjunto
    otherSet.values().forEach((value) => unionSet.add(value)); // Adicionamos todos os elementos do conjunto passado como parâmetro ao novo conjunto
    return unionSet; // Retornamos o conjunto
  }

  // * Intersecção
  // Retorna um novo conjunto com os elementos que estão nos dois conjuntos

  intersection(otherSet) {
    const intersectionSet = new Set(); // Criamos um novo conjunto para receber os elementos comuns aos dois conjuntos
    const values = this.values(); // Obtemos todos os elementos do conjunto atual
    const otherValues = otherSet.values(); // Obtemos todos os elementos do conjunto passado como parâmetro

    let biggerSet = values; // Criamos uma variável para receber o maior conjunto
    let smallerSet = otherValues; // Criamos uma variável para receber o menor conjunto

    if (otherValues.length - values.length) {
      biggerSet = otherValues; // Se o tamanho do conjunto passado como parâmetro for maior, o conjunto passado como parâmetro é o maior
      smallerSet = values; // Se o tamanho do conjunto atual for maior, o conjunto atual é o menor
    }

    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value); // Adicionamos o elemento ao conjunto de interseção
      }
    });
    return intersectionSet; // Retornamos o conjunto
    // Dessa forma iteramos sobre o menor conjunto e verificamos se o elemento está presente no conjunto maior
  }

  // * Diferença
  // Retorna um novo conjunto com os elementos que estão no conjunto atual e não no conjunto passado como parâmetro
  difference(otherSet) {
    const differenceSet = new Set(); // Criamos um novo conjunto para receber os elementos que estão no conjunto atual e não no conjunto passado como parâmetro
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value); // Adicionamos o elemento ao conjunto de diferença
      }
    });
    return differenceSet; // Retornamos o conjunto
  }

  // * Subtração / Subconjunto
  // Confirma se um dado conjunto é subconjunto de outro
  isSubSetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false; // Se o tamanho do conjunto atual for maior que o tamanho do conjunto passado como parâmetro, não é subconjunto
    }
    let isSubSet = true; // Criamos uma variável para informar se o conjunto atual é subconjunto do conjunto passado como parâmetro
    return this.values().every((value) => { // Retorna true se todos os elementos do conjunto atual estiverem no conjunto passado como parâmetro
      if (!otherSet.has(value)) {
        isSubSet = false; // Se um elemento não estiver no conjunto passado como parâmetro, o conjunto atual não é subconjunto
        return false;
      }
      return true;
    });
    return isSubSet; // Retornamos o resultado da verificação
  }
}

export default Set;

const setA = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(1);
setB.add(2);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

const unionAB = setA.union(setB); //[ 1, 2, 3, 4, 5 ]
const intersectionAB = setA.intersection(setB); //[ 2, 3 ]
const differenceAB = setA.difference(setB); //[ 1 ]
const differenceBA = setB.difference(setA); //[ 4 ]


console.log(unionAB.values());
console.log(intersectionAB.values());
console.log(differenceAB.values());
console.log(differenceBA.values());
console.log(setA.isSubSetOf(setB));
console.log(setB.isSubSetOf(setA));
console.log(setB.isSubSetOf(setC));

// set.add(1);
// set.add(2);

// console.log(set.size()); // 2
// console.log(set.sizeLegacy()); // 2

// console.log(set.values()); // [ 1, 2 ]
// console.log(set.valuesLegacy()); // [ 1, 2 ]

// set.clear();
// set.delete(1);
// console.log(set.has(1)); // false

// console.log(set.has(1)); // true
// console.log(set.has(3)); // false
