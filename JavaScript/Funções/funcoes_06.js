//Arrow function | Função seta

//Função de tipo expression
const DigaMeuNome = (name) => {
    console.log(name)
}

DigaMeuNome('Denilson')

//CallBack function  

//Chamar uma função de volta dentro de outra função
function DigaMeuNome(name) {
    console.log('Antes de execultar o callback')

    name()

    console.log('Depois de execultar o callback')

}

//Chamar uma função de volta dentro de outra função
DigaMeuNome(
    () => {
    console.log('Estou em uma callback')
    }
)



