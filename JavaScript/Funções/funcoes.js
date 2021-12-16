//Funções construtoras
/*
    function() constructor

    * Expressão new
    * Criar novo objeto
    * This keyword
*/


//Função construtora
function Person(name) {
    this.name = name
    this.andar = function() {
        return this.name + " está andando"
    }
}

//Novo objeto criado a partir da função
const nome = new Person("Denilson")
const joao = new Person("João")
console.log(nome.andar())
console.log(joao.andar())






