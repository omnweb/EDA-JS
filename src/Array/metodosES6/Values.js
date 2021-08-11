// O Método values devolve @@iterators devolve os valores do array

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const aValues = numbers.values()

    console.log('Next', aValues.next()) // { value: 1, done: false }

    for(const n of aValues){
        console.log(n) // 1,2,3,4...
    }