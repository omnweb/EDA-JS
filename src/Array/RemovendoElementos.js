let numbers = [ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

// Removendo o primeiro elemento do Array
for(let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] + 1 // Sobrescreve o valor de 
}

// Criando método removeFirstPosition
Array.prototype.reIndex = function (myArray) {
    const newArray = []
    for(let i = 0; i < myArray.length; i++) {
        if(myArray[i] !== undefined) {
            // console.log(myArray[i])
            newArray.push(myArray[i])
        }
    }
    return newArray
}

Array.prototype.removeFirstPosition = function() {
    for(let i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
    }
    return this.reIndex(this)
}

numbers = numbers.removeFirstPosition()


// Removendo do início do Array com o método Shift
numbers.shift() // Remove

// Removendo do final do Array com o método Shift
numbers.pop()
console.log(numbers)