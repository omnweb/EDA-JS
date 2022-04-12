const set = new Set();
// set.add(1);
// set.add(2);

// set.delete(1);
// console.log('entries', set.entries());

// console.log('keys',set.keys());
// console.log(set.values());
// console.log(set.has(1));
// set.clear();
// console.log(set.size);

// COnjuntos

const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// Simulando a operação de união de conjuntos

const union = (set1, set2) => {
  const unionSet = new Set();
  set1.forEach((item) => unionSet.add(item));
  set2.forEach((item) => unionSet.add(item));
  return unionSet;
};

// Simulando a operação de interseção de conjuntos

const intersection = (set1, set2) => {
  const intersectionSet = new Set();
  set1.forEach((item) => {
    if (set2.has(item)) {
      intersectionSet.add(item);
    }
  });
  return intersectionSet;
};

// Simulando a operação de diferença de conjuntos

const difference = (set1, set2) => {
  const differenceSet = new Set();
  set1.forEach((item) => {
    if (!set2.has(item)) {
      differenceSet.add(item);
    }
  });
  return differenceSet;
};

// Multiconjuntos ou bag
//   É um tipo de conjunto que permite a inserção de elementos repetidos

const bag = (...args) => {
    const bag = new Set();
    args.forEach((item) => bag.add(item));
    return bag;
}



console.log(union(setA, setB));
console.log(intersection(setA, setB));
console.log(difference(setA, setB));
console.log(bag(setA, setB));

// * Operações de conjuntos utilizando spread
//   É uma forma mais simples de realizar as operações de conjuntos

//? União utilizando spread
console.log("--------------------------");
console.log(new Set([...setA, ...setB]));

//? Interseção utilizando spread
console.log(new Set([...setA].filter((item) => setB.has(item))));

// ? Diferença utilizando spread
console.log(new Set([...setA].filter((item) => !setB.has(item))));





