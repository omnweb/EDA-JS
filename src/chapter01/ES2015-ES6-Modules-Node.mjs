import * as area from './calcArea';
import Book from './BookClass.mjs'


console.log('CircleArea', area.circleArea(2))
console.log('SquareArea', area.squareArea(2))

const myBook = new Book('Estruturas de Dados e Algoritmos em JavaScript')
myBook.printTitle()