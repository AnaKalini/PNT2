function sum(a, b) {
    var soma = a+b
    return soma
}
sum(5,6)

function ola(){
    var saudacao = "Olá"
    return saudacao
}
ola()

function olapessoa(pessoa){
    ola()
    return pessoa
}
olapessoa("João")


function idadecalc(anonasc, anoatual){
    var idade = anoatual - anonasc
    console.log(ola() + " " + olapessoa("João") + " sua idade é: " + idade)
    return idade
}
idadecalc(1990, 2024)