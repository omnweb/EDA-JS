// typescript passa a tipagem automática para a variável qdo um valor é atribuido
var age = 20;
var exisFlag = true;
var language = 'JavaScript';
// Caso contrário é recomendado declarar o tipo
// Caso não seja tipada recebe any
var favoriteLanguage;
var langs = ['Javascript', 'Ruby', 'Pyton'];
favoriteLanguage = langs[0];
var printName = function (person) {
    console.log(person.name, person.age);
};
var john = { name: 'John', age: 21 };
var mary = { name: 'Mary', age: 21, phone: '123456' };
printName(john);
printName(mary);
