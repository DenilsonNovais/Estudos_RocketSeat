//for...0f - Loop usando a propriedade de uma variavel
/*
let name = 'Denilson'
let names = ['João', 'Maria', 'Pedro', 'Paulo']

for(let char of name) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}
*/
//for...in - Loop usando a propriedade de um objeto

let pessoa = {
    nome: 'Denilson',
    idade: 31,
    peso: 74.4

}

for(let propriedade in pessoa) {
    console.log(propriedade)
    console.log(pessoa[propriedade])

}