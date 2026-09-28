const input = require("readline-sync")
const ValorCompra = parseInt(input.question("Qual o valor da compra? "))
const SiglaRegiao = input.question("Qual a sigla da regiao? SE, S, NE, N OU CO: ")
var frete = 0
var prazo = 0

if(ValorCompra <= 0) {
    console.log("valor da compra invalido" + ValorCompra)
}
else if(SiglaRegiao == "SE"){
    frete = 15
    prazo = ("2 dias uteis")
    if (ValorCompra > 150){
    console.log("frete grátis para compras acima de R$ 150" + "prazo" + prazo)}
    else {
    console.log ("Valor frete" + frete + "prazo" + prazo)
    }
}
else if(SiglaRegiao == "S"){
    frete = 20
    prazo = ("4 dias uteis")
    if (ValorCompra > 200){
    console.log("frete grátis para compras acima de R$ 200" + "prazo" + prazo)}
    else {
    console.log ("Valor frete" + frete + "prazo" + prazo)
    }
}
else if(SiglaRegiao == "NE"){
    frete = 25
    prazo = ("5 dias uteis")
    if (ValorCompra > 250){
    console.log("frete grátis para compras acima de R$ 250" + "prazo" + prazo)}
    else {
    console.log ("Valor frete" + frete + "prazo" + prazo)
    }
}
else{
    frete = 35
    prazo = ("7 dias uteis")
    if (ValorCompra > 300){
    console.log("frete grátis para compras acima de R$ 300 e o prazo " + prazo)}
    else {
    console.log ("Valor frete " + frete + " reais e o prazo " + prazo)
    }
}