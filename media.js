// 1. Variáveis do passageiro
let nomePassageiro = "João";
let saldoCartao = 10.00;
let tarifa = 4.50;
let temGratuidade = false;

// 2. Descontando a tarifa do saldo
let saldoRestante = saldoCartao - tarifa;

// 3. Verificando se a passagem será autorizada
let autorizarPassagem = temGratuidade || saldoRestante >= 0;

// Exibindo os resultados
console.log("Passageiro:", nomePassageiro);
console.log("Saldo inicial: R$", saldoCartao.toFixed(2));
console.log("Tarifa: R$", tarifa.toFixed(2));
console.log("Saldo restante: R$", saldoRestante.toFixed(2));
console.log("Possui gratuidade:", temGratuidade);
console.log("Passagem autorizada:", autorizarPassagem);