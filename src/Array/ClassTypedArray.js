// Foi criado para que pudessemos trabalhar com arrays contendo apenas um único tipo de dado

///////////////////////////////////////////////
//sintaxe: let myArray = new TypedArray(length)
///////////////////////////////////////////////

// Nota: TypedArray deve ser substituido por uma das classes da tabela a seguir:

///////////////////////////////////////////////////////////////////////////////////////////////////
//         TypedArray                   |                       Descrição                       ///
///////////////////////////////////////////////////////////////////////////////////////////////////
// Int8Array                            | Inteiro de 8 bits com sinal, usando complemento de dois
// Uint8Array                           | Inteiro de 8 bits sem sinal
// Uint8ClampedArray                    | Inteiro de 8 bits sem sinal
// Uint8ClampedArray                    | Inteiro de 8 bits sem sinal
// Int16Array                           | Inteiro de 16 bits com sinal, usando complemento de dois
// Uint16Array                          | Inteiro de 16 bits sem sinal
// Int32Array                           | Inteiro de 32 bits com sinal, usando complemento de dois
// Uint32Array                          | Inteiro de 32 bits sem sinal
// Float32Array                         | Número de ponto flutuante padrão IEEE com 32 bits
// Float64Array                         | Número de ponto flutuante padrão IEEE com 64 bits

let length = 5;
let int16 = new Int16Array(length);

let array16 = [];
array16.length = length;

for(let i=0; i<length; i++){
    int16[i]= i+1;
}

console.log(int16);