//If e Else
/*
let temperatura = 36

if(temperatura >= 37.5) {
    console.log('Febre alta')
}else if(temperatura < 37.5 && temperatura >= 37) {
    console.log('Febre moderada')
}else {
    console.log('Saudavel')
}
*/

//Switch

function calcular(number1, operador, number2) {
    let resultado

    switch (operador) {
        case '+':
            resultado = number1 + number2
            break
        case '-':
            resultado = number1 - number2
            break
        case '*':
            resultado = number1 * number2
            break
        case '/':
            resultado = number1 / number2
            break
        default:
            console.log('Não implementado')
            break
    }

    return resultado
}

console.log(calcular(6, '*', 3))
console.log(calcular(6, '+', 3))
console.log(calcular(6, '-', 3))
console.log(calcular(6, '/', 3))


