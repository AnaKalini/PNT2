const input = require("readline-sync")
const notas1 = parseInt(input.question("Qual a nota 1? "))
const notas2 = parseInt(input.question("Qual a nota 2? "))
const notas3 = parseInt(input.question("Qual a nota 3? "))
const frequencia = parseInt(input.question("Qual a frequencia? "))
const projetoIntegrador = input.questionFloat("Qual a nota do projeto integrador? ")
var nota1 = 0
var nota2 = 0
var nota3 = 0
var frequencias = 0
var pi = 0
var media = (nota1+nota2+nota3)/3


if(media >= 7 && frequencias >= 75 && pi >= 7){
        console.log("aprovado!")
} else if(media >= 7 && frequencias < 75 && pi < 7){
    console.log("Recuperação!")
}
else if (media < 7 && frequencias < 75 && pi < 7){
    console.log("Conselho de classe!")
}else{
    console.log("fale com a professora")
}
    
