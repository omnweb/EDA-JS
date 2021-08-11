// Copy Within copia uma sequencia de valores de um array para a posição de um índice de início

let copyArray = [1, 2, 3, 4, 5, 6];

// Supondo que precisemos copiar 4, 5, 6 para as primeiras posições do array
// copyArray.copyWithin(0, 3) //[ 4, 5, 6, 4, 5, 6 ]
// console.log(copyArray);

// Considere alterar as posiçoes 3,4 para 1,2
copyArray.copyWithin(1, 3, 5); //[ 1, 4, 5, 4, 5, 6 ]
console.log(copyArray);