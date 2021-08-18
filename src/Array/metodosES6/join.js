// Podemos trocar os separadores usando Join

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.toString(); //  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

const numbersString = numbers.join('-');
console.log(numbersString)