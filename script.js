// Calculadora de partidas rankeadas

const prompt = require ("prompt-sync")({sigint: true})

var resultado

console.log("Seja Bem Vindo, vamos calcular seu Ranking!")

let nome = prompt("Primeiro, diga o nome do seu herói: ")


function ranking (vitorias, derrotas) {
    var vitorias = parseInt(prompt("Informe o número de vitórias:"))
    var derrotas = parseInt(prompt("Informe o número de derrotas:"))
    resultado = vitorias - derrotas
}


ranking()

if (resultado <= 10) {
    console.log("O Herói " + nome + "  tem saldo de " + resultado + " vitorias e está no nível Ferro")
} else if (resultado >= 11 && resultado <= 20) {
    console.log("O Herói " + nome + "  tem saldo de " + resultado + " vitorias e está no nível Bronze")
} else if (resultado >= 21 && resultado <= 50) {
    console.log("O Herói " + nome + "  tem saldo de " + resultado + " vitorias e está no nível Prata")
} else if (resultado >= 51 && resultado <= 80) {
    console.log("O Herói " + nome + "  tem saldo de " + resultado + " vitorias e está no nível Ouro")
} else if (resultado >= 81 && resultado <= 90) {
    console.log("O Herói " + nome + "  tem saldo de " + resultado + " vitorias e está no nível Diamante")
} else if (resultado >= 91 && resultado <= 100) {
    console.log("O Herói " + nome + "  tem saldo de " + resultado + " vitorias e está no nível Lendário")
} else if (resultado >= 100) {
    console.log("O Herói " + nome + "  tem saldo de " + resultado + " vitórias e está no nível Imortal")
} else {
    console.log("Héroi sem Ranking")
}

