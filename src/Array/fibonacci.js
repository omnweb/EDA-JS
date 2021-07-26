// 20 primeiros números da sequência de Fibonnaci

const fibonacci = []
fibonacci[1] = 1
fibonacci[2] = 1

let controle = 20
for(let i = 3; i < controle; i++) {
    fibonacci[i] = fibonacci[i -1] + fibonacci[i -2]
}

for (let i = 1; i < fibonacci.length; i++){
    console.log(fibonacci[i])
}