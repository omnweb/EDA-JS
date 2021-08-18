// Supondo o array Person com name e age, e queremos ordenar por age

const persons = [
    {name: "Ana", age: 28},
    {name: "Bia", age: 32},
    {name: "Cris", age: 25}
]

function comparePerson(a, b) {
    if(a.age < b.age) {
        return -1
    }
    else if(a.age > b.age){
        return 1
    }
    else return 0
}

console.log(persons.sort(comparePerson))