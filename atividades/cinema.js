const input = require("readline-sync")
const idade = parseInt(input.question("Qual a sua idade? "))
var valorIngresso = 0
var podeEntrar = true

if(idade < 12){
    console.log("Você não pode entrar e o valor do ingresso é " + valorIngresso)
}else if(idade >= 12 && idade <= 15){
    valorIngresso = 30
    console.log("Só lamento não pode assistir, volte pra casa e o valor do ingresso seria " + valorIngresso)
}else if(idade >= 16 && idade < 60) {
    podeEntrar = true
    valorIngresso = 30
    console.log("Pode entrar e aproveitar o filme e o valor do ingresso é " + valorIngresso)
}else {
    valorIngresso = 15
    console.log("Pode entrar e aproveitar o filme e o valor do ingresso é " + valorIngresso)
}
