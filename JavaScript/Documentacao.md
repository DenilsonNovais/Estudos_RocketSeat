# JavaScript Core

* Linguagem de programação que roda no Navegador do usuário (front-end)
    * Se você clicar em algum botão da pagina e aparecer uma janela, isso é o JavaScript
    * Alteração do site ou aplicativo, conforme a informação do usuário.
* Roda também no computador (back-end)

## O que podemos fazer?

* Podemos criar aplicações web, mobile (React Native), desktop (Electron).
* Empresas famosas que usam:
    * Facebook (Instagram, Whatsapp)
    * Google (Youtube, Gmail, Drive)
    * Uber
    * Netflix
    * Tiktok
    * ...

* 99.99% dos sites na web usam JavaScript
* Linguagem obrigatória para quem programa o Front-end web

## Evolução

* A comunidade cresce cada vez mais e a linguagem está sempre evoluindo

## O que vamos ver no curso?

- Tipos de dados
- Variáveis
- Funções
- Condicionais
- Estruturas de repetição
- ...

## Dinamica do curso

* Conceitos e fundamentos
* Prática
* Revisão

## A importancia da sintaxe

* Toda linguagem tem Sintaxe
* Uma boa comunicação precisa de uma boa sintaxe
* 82% dos erros para iniciantes estão na sintaxe

## Tipos de Dados

* Gramática
    * Elementos da linguagem e suas combinações
    * A arte de falar e escrever corretamente

* Vocabulário
    * Conjunto de termos e expressões
    * Agrupamento de palavras

* Precisamos saber como escrever
* Precisamos saber o significado
* Precisamos continuar aprendendo, para crescer nosso vocabulário.

## Dinamica do aprendizado

* Conceito e escrita

> Vamos aprender os tipos de dados mais utilizados na linguagem
    * Você sabia que é possivel aprender 80% de uma lingua nova, com 
    cerca de 20% do vocabulário? (até menos)

## Tipos de dados

* String
/* String
    - Cadeia de caracteres
    "" //Aspas duplas
    '' //Aspas simples
    `` //Template literals ou templete string
    - Permite interpolações e mutiplas linhas
    * Interpolaçõe = Funções dentro da srting
*/

// Pode se colocar aspas simples dentro da string
console.log("Denilson don't know javascript");

// Utilizada quando se necessita adição de aspas duplas dentro da string
console.log('Denilson disse:"Estou aprendendo JavaScript"');

//Permite aspas duplas e simples alem de interpolações dentro da string
console.log(`Denilson don't know JavaScript.
Mas disse: "Estou aprendendo JavaScript, hoje vi tipos de dados
depois será função" ${1+4}
 `);

* Number

/* Number
    - Números
    33 //inteiros
    12.5 //reais - float
    NaN //Not a Number
    Infinity //Infinito
*/

//Faz diversas interações utilizando números
console.log(10-5+(-3)*4.6);

* Boleano

/*Boolean
    - boleano 
    true //Verdadeiro
    false //Falso
*/

* Indefinido

/* Underfined
    - Inderfinido

 * Nulo
    - nulo
    - Objeto que não possue nada dentro
    - Diferente de inderfinido
*/

## Objeto em JavaScript

/* Object
    - Objeto
    - Propriedades / Atributos
    Ex: Celular (tamanho, peso, cor, altura, ...)
    - Funcionalidades / Métodos
    Ex: Celular (ligar, desligar, ...)

    um objeto é representado por:
    { propriedades: "valor"}
*/

## Arrays

/* Array (Vetores)
    - Tipo de dado extrutural
    - uma lista.
    - Um agrupamento de dados

    ["Denilson", 31]
*/

## Variaveis

* Nome simbolico para receber algum valor
* Atalhos de Codigo
* Identificadores
* 3 palavras reservadas para se criar uma variavel
    - var
    - let
    - const

## var
```js
//var é global e pode funcionar fora de um escopo de bloco
console.log('> Existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> Existe x depois do bloco? ', x)
```
## let e const
```js
//const e let sao locais e só funcionam no scopo onde foi criada
console.log('> Existe y antes do bloco? ', y)

{
    var y = 0
}

console.log('> Existe y depois do bloco? ', y)
```

* O JavaScript é uma linguagem fracamente tipada e dinâmica
    - Variaveis não precisam ter um tipo previamente definidos
    - Podemos mudar o conteúdo da variavel.

## Scope

* Escopo determina a visibilidade de alguma variavel no JavaScript

## Block statement
```js
{//Vamos iniciar um bloco aqui

    //Aqui dentro é um bloco e pode se colocar qualquer codigo

}//Aqui é o fechamento do bloco
```
* O bloco também criará um novo escopo. Chamamos de `block-scoped`

## Criando nomes para variaveis

* JavaScript é case-sensitive(maiusculas e minusculas importam)
* JavaScript aceita cadeia de caracteres Unicode(Pode colocar aspas, acentuações)

- Ideal
    * Criar nomes que fazem sentido 
    * Que explique o que a variavel é ou faz
    * camelCase
    * snake_casa
    * Escrever em inglês


