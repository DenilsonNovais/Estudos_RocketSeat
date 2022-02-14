//variaveis e tipos de dados

//Declarando uma variavel
var name
//Atribuindo valor a variavel ou assignment
name = "Denilson"
console.log(name);

//Agrupamento de declarações
let idade, isHuman 
idade = 20;
isHuman = true;

console.log(name, idade, isHuman);

//concatenação de texto com variaveis
console.log('O ' + name + ' tem ' + idade + ' anos ');

//Interpolando valores com templates literais
console.log(`O ${name} tem ${idade} anos`);

//object ou objeto

//Criação de um objeto
const pessoa = {
    nome: 'João',
    idade: 20,
    peso: 88.2,
    isAdmin: true
}

//Escrevendo propriedades do objeto
console.log(pessoa.nome);

//Arrays

//Criando um Array
const animais = [
    'Leao',
    'Macaco',
    'Gato'
]

//Acessando valores do Array
console.log(animais[0]);
console.log(animais[1]);
