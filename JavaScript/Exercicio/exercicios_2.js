/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo
array:
    * receitas: []
    * despesas: []

Agora , crie uma função que irá calcular o total de receitas e despesas 
e irá mostrar uma mensagem se a família está com saldo positivo ou 
negativo, seguido do valor do saldo.

*/

let familia = {
    receitas: [1550.00, 2350.00, 250.00],
    despesas: [700.00, 550.00, 1300.00, 800.00, 200.00 ]
}

function somar(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calcularBalanco() {
    const calcularReceitas = somar(familia.receitas)
    const calcularDespesas = somar(familia.despesas)

    const total = calcularReceitas - calcularDespesas

    const estaTudoBem = total >= 0

    let resultadoBalanco = "negativo"

    if (estaTudoBem) {
        resultadoBalanco = "positivo"
    }

    console.log(`Seu saldo é ${resultadoBalanco}: R$${total.toFixed(2)}`)
}

calcularBalanco()



