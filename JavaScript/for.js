//Estrutura de repetição - for

//for(Declaração da variavel; condição de continuação do loop; expressão final)

//Incremento de repetição
for(let i = 0; i <= 10; i++) {
    console.log(i)
}

//Decremento de repetição
for(let i = 100; i > 0; i--) {
    console.log(i)
}

//Parada do loop
for(let i = 10; i > 0; i--) {
    if(i === 5) {
        break;
    }

    console.log(i)
}

//Pula e continua o loop
for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }

    console.log(i)
}
