/*

    Prototypes
    
    * Linguagem baseada em prototipos]
    * Cadeia de Prototipo
    * _Proto_

*/

/*
//Operadores de atribuição (Assignment)
let x

//Atribuição (Assignment)
x = 1

//Adicionar atribuição
//Expressão x = x + 2
x += 2
console.log(x);

//Operadores logicos
let pao = true
let queijo = true

//And - &&
//As duas expressões precisam ser verdadeiras
console.log(pao && queijo)


//Or - ||
//Apenas uma das expressões precisa ser verdadeira
console.log(pao || queijo)



//Not - !
//Inverte as expressões
console.log(!pao)
*/

//operações condicionais | se = ? | se não = :
let pao = false
let queijo = false

//Se topCafe tiver pao e queijo "café top" se não "café ruim"
//const topCafe = pao && queijo ? 'Café top' : 'Café ruim'

//Se topCafe tiver pao ou queijo "café top" se não "café ruim"
const topCafe = pao || queijo ? 'Café top' : 'Café ruim'

console.log(topCafe)

//Maior de 18
let idade = 16
const podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode Dirigir"
console.log(podeDirigir)





