//Escopo da função

let subject = 'create video'

//Ao passar argumento subject para a função se torna objeto unico dentro do scopo
function createThink(subject) {
    subject = 'study'
    return subject
}

//mostra o subject com valores diferentes pq são diferentes.
console.log(createThink(subject))
console.log(subject)
