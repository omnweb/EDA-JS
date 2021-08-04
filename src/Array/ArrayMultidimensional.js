// Matriz 3 por 3 por 3
const matrixm3x3x3x = []

for (let i=0; i<3; i++){
    matrixm3x3x3x[i] = []
    for(let j=0; j<3; j++){
        matrixm3x3x3x[i][j] = []
        for(let k=0; k<3; k++){
            matrixm3x3x3x[i][j][k] = i + j + k
        }
    }
}

// Exibindo o conteúdo da matriz

for(let i=0; i < matrixm3x3x3x.length; i++){
    for(let j=0; j < matrixm3x3x3x[i].length; j++){
        for(let k=0; k < matrixm3x3x3x[i][j].length; k++){
            console.table(matrixm3x3x3x[i][j][k])
        }
    }
}