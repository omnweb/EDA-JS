// // typescript passa a tipagem automática para a variável qdo um valor é atribuido
// let age = 20
// let exisFlag = true
// let language = 'JavaScript'

// // Caso contrário é recomendado declarar o tipo
// // Caso não seja tipada recebe any

// let favoriteLanguage: string
// let langs = ['Javascript', 'Ruby', 'Pyton']
// favoriteLanguage = langs[0]

// // Interface

// interface Person {
//     name: string,
//     age: number
// }
// const printName = (person: Person) => {
//     console.log(person.name)
// }

// const john = {name: 'John', age: 21}
// const mary = {name: 'Mary', age: 21, phone: '123456'}

// printName(john)
// printName(mary)


interface Comparable<T> {
    compareTo(b: T): number
}
class MyObject implements Comparable<MyObject> {
    age: number;
    compareTo(b: MyObject): number {
        if (this.age === b.age) {
            return 0
        }
        return this.age > b.age ? 1 : -1
    }
}

