let averageTempDay1 = [72, 75, 79, 79, 81, 81];
let averageTempDay2 = [81, 79, 75, 75, 73, 73];


// É mais recomendado dessa forma
let averageTemperature = [];
averageTemperature[0] = [72, 75, 79, 79, 81, 81];
averageTemperature[1] = [81, 79, 75, 75, 73, 73];

// Mas tbm pode se gerar uma matriz dessa forma:
// dia 1
let averageTemp=[];
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 71;
averageTemp[0][5] = 81;

// dia 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 73;

// Imprimindo no log
function printMatrix(myMatrix){
    for(let i=0; i<myMatrix.length; i++){
        for(let j=0; j<myMatrix.length; j++){
            console.log(myMatrix[i][j])
        }
    }
}
// printMatrix(averageTemp)
console.table(averageTemp)