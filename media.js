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

// 1. Criando o Array com os itens
let listaDeCompras = ["Arroz", "Feijão", "Leite", "Café"];

// 2. Removendo o "Café" do final da lista
listaDeCompras.pop();

// 3. Adicionando "Pão" no início da lista
listaDeCompras.unshift("Pão");

// 4. Adicionando "Açúcar" e "Biscoito" no final da lista
listaDeCompras.push("Açúcar", "Biscoito");

// Exibindo a lista final
console.log(listaDeCompras);

// 1. Criando o objeto perfilUsuario
let perfilUsuario = {
    nome: "Carlos",
    idade: 25,
    email: "carlos@email.com",
    enderecos: [
        "Rua das Flores, 100",
        "Avenida Brasil, 250"
    ],
    contaAtiva: true
};

// 2. Adicionando um novo endereço
perfilUsuario.enderecos.push("Rua Central, 500");

// 3. Atualizando a idade no aniversário
perfilUsuario.idade = perfilUsuario.idade + 1;

// Exibindo o perfil atualizado
console.log(perfilUsuario);