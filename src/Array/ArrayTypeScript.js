//@ts-check
// Comentário acima ativa a verificação de tipagem typeScript

// No caso da variável numbers em typeScript não foi necessário tipá-la
// Isso pq ela já foi iniciada com VALORES numéricos, então ela entende: numbers = number[]
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

///////////////////////////////////////////////////////////
// Refatorando o código de ArrayPersons desenvolvido em js
///////////////////////////////////////////////////////////



interface Person  {
    name: String;
    age: Number;
}

// const friends = {name: String, age: Number}[];
const friends:Person[] = [
    {name: 'Ton', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Bia', age: 25}
]

function comparePeson(a: Person, b: Person){
    if(a.age < b.age){
        return -1
    }
    if(a.age > b.age){
        return 1
    }
    return 0;
}
comparePeson(friends);
