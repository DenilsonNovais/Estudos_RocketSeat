//var é global e pode funcionar fora de um escopo de bloco
//hoisting - elevação
console.log('> Existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> Existe x depois do bloco? ', x)

//const e let sao locais e só funcionam no scopo onde foi criada
{
    var y = 0
    console.log('> Existe y antes do bloco? ', y)
}

//var - Fracamente tipada e Dinamica
var clima = "quente" // Era uma string
clima = true       // Virou um bolean

//let - Fracamente tipada e Dinamica
let tempo = "quente" //Era uma string
tempo = 123     //Virou um number

//const - Seu valor é constante, não pode ser alterado
const climas = "quente"
//clima = "frio"

console.log(typeof clima);
console.log(typeof tempo);
console.log(typeof climas);

