let names = ['Ana', 'ana', 'John', 'john'];

console.log(names.sort((a, b) => {
    if(a.toLowerCase < b.toLowerCase){
        return -1
    }
    if(a.toLowerCase > b.toLowerCase) {
        return 1
    }
    return 0
}))

// No caso acima não haverá mudanças no array [ 'Ana', 'ana', 'John', 'john' ]

///////////////////////////////////////////////////////////////////
// Para trazer as letras minúsculas no array, usamos localeCompare
///////////////////////////////////////////////////////////////////

console.log(names.sort((a, b) => a.localeCompare(b))) // retorno [ 'ana', 'Ana', 'john', 'John' ]

///////////////////////////////////////////////////////
// Para caracteres com acento tbm usamos localeCompare
///////////////////////////////////////////////////////

const names2 = ['Ovidio', 'Ovídio'];

console.log(names2.sort((a, b) => a.localeCompare(b))) // Retorna com acento no final [ 'Ovidio', 'Ovídio' ]




