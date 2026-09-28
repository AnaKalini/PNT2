var numero = 20
while(numero<100){
        numero++
    console.log(numero)
}

var escovarDente = 100
while(escovarDente>0){
       escovarDente--
    console.log(escovarDente)
}

const input = require("readline-sync")
let gotasAdicionadas = 0
let limiteGotas = input.questionInt("Qual a quantidade de gotas de baunilha? ")

while(gotasAdicionadas < limiteGotas){
    gotasAdicionadas++
    console.log(gotasAdicionadas)
}




