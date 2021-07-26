let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Inserindo elemento ao final do Array
numbers[numbers.length] = 10

// Método Push
numbers.push(11)
numbers.push(12, 13)


//////////////////////////////////////////////////////////////////////////////////////
//Inserindo elemento no Início do Array, percorrendo de forma inversa
//Necessário deslocar os valores para desocupar o índice [0] 
//Criando a uma função e disponibilizando a todas as instâncias do Array prototype
//////////////////////////////////////////////////////////////////////////////////////

// this.length é o valor final do array
Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i>= 0; i--) {
        this[i] = this[i -1]
    }
    this[0] = value
}

numbers.insertFirstPosition(-1)

// Método Unshift
numbers.unshift(-2) //Adiciona
numbers.unshift(-4, -3)

console.log(numbers)

