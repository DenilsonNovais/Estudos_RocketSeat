// 1. Declare uma variavel de nome weight
let weight;

// 2. Que tipo de dado é a variavel acima
console.log(typeof weight); //undefined

/*
   3. Declare uma variável e atribua valor para cada 
   um dos dados:
    * name: string
    * age: number (integer)
    * stars: number (float)
    * isSubscribed: boolean
*/
let name = 'Denilson';
let age = 31;
let stars = 12.4;
let isSubscribed = false;

/* 
   4. Avariavel student abaixo é de que tipo de dado?
        object
   4.1 Atribua a ela as mesmos propriedades e valores do exercicio 3.

   4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        Atenção substitua <name>, <age>, e <weight> pelos valores de cada propriedade
        do objeto
*/
let student = {
    name: 'Denilson',
    age: 31,
    weight: 73.4,
    isSubscribed: false
};
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

/* 
   5. Declare uma variavel de tipo Array, de nome students e atribua a ela 
   nenhum valor, ou seja, somente Array vazio.
*/
let students = [];

/* 
   6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da 
   questão 4. (não copie e cole o objeto, mas use o objeto criado e insira ele dentro do array)
*/
students = [
    student
]
console.log(students)

/* 
   7. Coloque no console o valor da posição zero do
   array acima. 
*/
console.log(students[0]);

/* 
   8. Crie um novo student e coloce na posição 1 do 
   array acima. 
*/
const john = {
    name: 'John',
    age: 23,
    weight: 63.5,
    isSubscribed: true
}
students[1] = john;
console.log(students)





