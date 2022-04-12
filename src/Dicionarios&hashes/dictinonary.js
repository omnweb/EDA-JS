import { defaultToString } from "../util";
import ValuePair from "./valuePair";

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn; // Garantindo que a key será uma string
    this.table = {}; //Utilizando um objeto para armazenar os valores
  }

  // Adiciona um novo item ao dicionário, caso o item já exista, o valor é sobrescrito
  set(key, value) {
    if (key !== null && key !== undefined) {
      const strKey = this.toStrFn(key); // Garantindo que a key será uma string
      this.table[strKey] = new ValuePair(key, value); // Adicionando par de chave e valor
      return true;
    }
    return false;
  }

  // Remove o value do dicionário usando key como parâmetro de busca
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  // Retorna um booleano indicando se o dicionário tem ou não a key
  hasKey(key) {
    const strKey = this.toStrFn(key);
    return this.table[strKey] !== undefined;
  }

  // Retorna o valor associado a key passada como parâmetro
  get(key) {
    const valuePair = this.table[this.toStrFn(key)]; // Buscando o par de chave e valor
    return valuePair === null ? undefined : valuePair.value; // Retornando o valor ou undefined
  }
  //   Essa segunda abordagem de get2 é mais custosa pois acessa o objeto table 2 vezes
  getLegacy(key) {
    if (this.hasKey(key)) {
      return this.table[this.toStrFn(key)];
    }
    return undefined;
  }

  // Remove todos os valores do dicionário
  clear() {
    this.table = {};
  }

  // Retorna o tamanho do dicionário
  size() {
    return Object.keys(this.table).length;
  }

  // Retorna um booleano indicando se o dicionário está vazio
  isEmpty() {
    return this.size() === 0;
  }

  // Retorna um array convertido para string
  toString() {
    if (this.isEmpty()) return ""; // Se o dicionário estiver vazio devolvemos uma string vazia
    const valuePairs = this.keyValues(); // Criando um array com todos os pares de chave e valor
    let objString = `${valuePairs[0].toString()}`; // Criando a string inicial com o primeiro par de chave e valor
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`; // Se houver alguma valor ele será adicionado à string
    }
    return objString; // E devolvemos a string
  }


  //   Versão mais recente
  //   Chamamos KeyValue que retorna um array de instancias de ValuePair
  // Iteramos sobre o array retornando a key

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  // Retorna um array com as chaves do dicionário
  keysLegacy() {
    const keys = [];
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      keys.push(valuePairs[i].key);
    }
    return keys;
  }

  // Retorna um array com o valor do dicionário
  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  // Retorna um array com o conteúdo do dicionário
  ValuesLegacy() {
    const values = [];
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      values.push(valuePairs[i].value);
    }
    return values;
  }

  // Retorna um array com pares chave e valor do dicionário
  // Roda em navegadores modernos
  keyValues() {
    return Object.values(this.table);
  }

  //   Roda em navefadores antigos
  keyValuesLegacy() {
    const valuesPair = [];
    for (const k in this.table) {
      // Percorrendo o objeto table verificando com
      if (this.table.hasKey(k)) {
        // hasKey se a chave existe
        valuesPair.push(this.table[k]); // Adicionando o par de chave e valor ao array
      }
    }
    return valuesPair;
  }

  // Retorna um array com o conteúdo do dicionário
  getEntries() {
    const entries = [];
    for (const k in this.table) {
      if (this.table.hasOwnProperty(k)) {
        entries.push([k, this.table[k]]);
      }
    }
    return entries;
  }

  // Itera sobre o dicionário
  forEach(callbackfn) {
    const valuePairs = this.keyValues(); // Retorna um array de instancias de ValuePair
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackfn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) break; // Para o loop se o retorno for false
    }
  }
}

export default Dictionary;

const dictinonary =  new Dictionary();

dictinonary.set('Gandalf', 'gandalf@email.com');
dictinonary.set('Jhon', 'jhon@email.com');
dictinonary.set('Tyrion', 'tyrion@email.com');

console.log(dictinonary.hasKey('Gandalf')); // true
console.log(dictinonary.size()); // 3

console.log(dictinonary.keys()); // ['Gandalf', 'Jhon', 'Tyrion']
console.log(dictinonary.values()); // ['Gandalf', 'Jhon', 'Tyrion']
console.log(dictinonary.get('Tyrion')); // tyrion@email.com


console.log(dictinonary.remove('Jhon')); // true

console.log(dictinonary.keyValues()); // [ValuePair { key: 'Gandalf', value: 'gandalf@email.com' }, ValuePair { key: 'Tyrion', value: 'tyrion@email.com' }]
console.log(dictinonary.toString()); // Gandalf,Jhon,Tyrion

dictinonary.forEach((key, value) => console.log(`${key}: ${value}`));
