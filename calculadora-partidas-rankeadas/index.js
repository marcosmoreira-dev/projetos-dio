// Calculadora de Partidas Rankeadas

function  calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas
}

let nivel
let vitorias = 121
let derrotas = 50

let saldoVitorias = calcularSaldo(vitorias, derrotas)

if (vitorias < 10) {
    nivel = "Ferro"
} else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze"
} else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata"
} else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro"
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante"
} else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário"
} else if (vitorias >= 101) {
    nivel = "Imortal"
}

console.log (`O Herói tem o saldo de ${saldoVitorias} e está no nível ${nivel}`)