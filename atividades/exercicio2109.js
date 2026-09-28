let carrinho = ["maça", "leite", "cafe", "pão","chocolate"]
let itemProcurado = "cafe"
let temCafe = false
for (let i=0; i <carrinho.length; i++){
    if (carrinho[i] == itemProcurado) {
        temCafe=true
    console.log("Tem café no carrinho")
    break
} 
}

let notas = [ 8, 5.5, 4.0, 9,5, 6, 7.5]
let aprovados = 0

for(var a=0; a < notas.length; a++){
    if (notas[a]>=7.0){ aprovados ++
    }
}
console.log("total dos alunos aprovados foram:" + aprovados)


let temperatura = [28, 31, 35, 40, 32, 29]
let alerta = 0

for(var b=0; b < temperatura.length; b++){
    if (temperatura[b]>30){
        console.log("Alerta: Temperatura alta de " + temperatura [i] + "°C registrado")
    }
}
