/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit a faça 
    a transformação de uma unidade para outra e vice versa

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

//transform('50F')
function TransformarGraus(graus) {
    const existeCelsius = graus.toUpperCase().includes('C')
    const existeFahrenheit = graus.toUpperCase().includes('F')

    if (!existeCelsius && !existeFahrenheit) {
        throw new Error('Grau não identificado')
    }

    //Fluxo ideal F -> C
    let atualizarGraus = Number(graus.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let grausSign = 'C'

    //Fluxo auternativo C -> F
    if (existeCelsius) {
        atualizarGraus = Number(graus.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32 
        grausSign = 'F'
    }

    return formula(atualizarGraus) + grausSign
}

try {
    console.log(TransformarGraus('10C'))
    console.log(TransformarGraus('50F')) 
    TransformarGraus('50Z')

}catch (error) {
    console.log(error.message)
}


