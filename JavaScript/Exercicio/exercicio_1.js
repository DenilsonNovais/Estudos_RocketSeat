/* ### Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema numerico
    para sistema de notas em caracteres A B C ...

    * De 90 até 100 - A
    * Entre 80 e 89 - B
    * Entre 70 e 79 - C
    * Entre 60 e 69 - D
    * Menos que 60   - F

*/


function getNota(nota) {
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 0

    let notaFinal;

    if (notaA) {
        notaFinal = "A"
    }
    else if (notaB) {
        notaFinal = "B"
    }
    else if (notaC) {
        notaFinal = "C"
    }
    else if (notaD) {
        notaFinal = "D"
    }
    else if (notaF) {
        notaFinal = "F"
    }
    else {
        notaFinal = "Nota invalida"
    }

    return notaFinal
}


console.log(getNota(101))
console.log(getNota(-12))
console.log(getNota(40))
console.log(getNota(60))
console.log(getNota(70))
console.log(getNota(80))
console.log(getNota(90))




