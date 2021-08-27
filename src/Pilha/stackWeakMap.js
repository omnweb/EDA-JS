// O tipo de dado WeakMap é usado para GARANTIR que a propriedade de uma CLASSE seja PRIVATE

// WEAK MAP pode armazenar um par de chave e valor onde a chave é um objeto e o valor pode ser um dado de qqr tipo

// Versão com ARRAY

const items = new WeakMap();
class Stack {
    constructor() {
        items.set(this, [])
    }

    push(element) {
        const s = items.get(this);
        s.push(element);
    }

    pop() {
        const s = items.get(this);
        r = s.pop()
        return r
    }
    // Outros métodos
}